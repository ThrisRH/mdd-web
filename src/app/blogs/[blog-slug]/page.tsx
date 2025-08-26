import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import LinkedinIC from "@/assets/svg/linkedin";

import { BlogDetails } from "@/types/blog";
import PageContainer from "@/components/Main/PageContainer";
import NotFound from "@/components/Main/NotFound";
import PostDetail from "@/components/PostDetailCard/PostDetail";
import SectionWrapper from "@/components/Section/SectionWrapper";
import SmallPostCard from "@/components/PostCard/SmallPostCard";
import { H4 } from "@/components/Typography/Heading.styles";
import CommentContainer from "@/components/Comment/CommentContainer";

interface PageProps {
  params: { "blog-slug": string };
}

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

async function getBlog(slug: string): Promise<BlogDetails | null> {
  try {
    const res = await fetch(`${API_URL}/api/blogs/by-slug/${slug}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Fetch bài liên quan
async function getRelatedBlogs(categoryId: string): Promise<BlogDetails[]> {
  try {
    const res = await fetch(
      `${API_URL}/api/blogs?filters[cate][documentId][$eq]=${categoryId}&populate=cover&pagination[page]=1&pagination[pageSize]=3`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Metadata server-side (SEO)
export async function generateMetadata({ params }: PageProps) {
  try {
    const blog = await getBlog(params["blog-slug"]);
    if (!blog)
      return {
        title: "my MDD diary | Not Found",
        description: "Blog not found",
        image: "",
      };

    const description = Array.isArray(blog.subContent)
      ? blog.subContent.map((item) => item.content).join(" ")
      : blog.subContent ?? "";

    return {
      title: `my MDD diary | ${blog.title}`,
      description: description,
      openGraph: {
        title: blog.title,
        description: description,
        images: blog.cover?.url ? [{ url: blog.cover.url }] : [],
      },
    };
  } catch (error) {
    return {
      title: "my MDD diary | Not Found",
      description: "Blog not found",
      image: "",
    };
  }
}

export default async function Page({ params }: PageProps) {
  const slug = params["blog-slug"];
  const blogDetail = await getBlog(slug);

  if (!blogDetail) {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }

  const blogs = blogDetail?.cate
    ? await getRelatedBlogs(blogDetail.cate.documentId)
    : [];

  return (
    <PageContainer>
      <div className="flex-2 flex flex-col items-center gap-[50px]">
        {/* Chi tiết bài viết */}
        <PostDetail
          slug={blogDetail.slug}
          documentId={blogDetail.documentId}
          title={blogDetail.title}
          publishedAt={blogDetail.publishedAt}
          mainContent={blogDetail.mainContent}
          subContent={blogDetail.subContent}
          optionImage={blogDetail.optionImage}
          cover={blogDetail.cover}
        />
        {/* Chia sẻ mạng xã hội */}
        <SectionWrapper>
          <div className="flex flex-row gap-4">
            <H4 className="uppercase">Chia sẻ bài viết qua</H4>
            <FacebookIC />
            <TwitterIC />
            <LinkedinIC />
          </div>
        </SectionWrapper>

        {/* Các bài viết liên quan */}
        <SectionWrapper>
          <div className="flex flex-col gap-4 w-full">
            <H4 className="uppercase">Các bài viết liên quan</H4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
              {blogs.map((item, index) => (
                <SmallPostCard key={index} {...item} />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Comment Section (client-side) */}
        <SectionWrapper>
          <div className="flex flex-col gap-[50px] w-full">
            <H4 className="uppercase">Leave a comment</H4>
            <CommentContainer documentId={blogDetail.documentId} />
          </div>
        </SectionWrapper>
      </div>
    </PageContainer>
  );
}
