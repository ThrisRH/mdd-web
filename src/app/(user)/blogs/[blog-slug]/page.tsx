import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import LinkedinIC from "@/assets/svg/linkedin";

import { BlogDetails } from "@/types/blog";
import PageContainer from "@/components/Main/PageContainer";
import NotFound from "@/components/Main/NotFound";
import PostDetail from "@/components/blogs/blogdetail";
import Section from "@/components/blogs/blogdetail/section";
import SmallPostCard from "@/components/blogs/blogcard/small_blog_card";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import { BlogGrid } from "@/components/blogs/blogdetail/section/styled";
import CommentWrapper from "@/components/comment";
import { Text } from "@/styles/theme/typography";
import { fetchBlogDetail } from "@/utils/data/BlogAPI";
import { HOST } from "@/app/(admin)/config/constant";

// Fetch bài liên quan
async function getRelatedBlogs(categoryId: string): Promise<BlogDetails[]> {
  try {
    const res = await fetch(
      `${HOST}/api/blogs?filters[cate][documentId][$eq]=${categoryId}&populate=cover&pagination[page]=1&pagination[pageSize]=3`,
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
export async function generateMetadata({
  params,
}: {
  params: Promise<{ "blog-slug": string }>;
}) {
  const { "blog-slug": slug } = await params;
  const blog = await fetchBlogDetail(slug);
  try {
    if (!blog)
      return {
        title: "my MDD diary | Not Found",
        description: "Blog not found",
        image: "",
      };

    const title = blog.title;
    const description = Array.isArray(blog.subContent)
      ? blog.subContent
          .map((item) => item.content)
          .join(" ")
          .slice(0, 160)
      : blog.subContent ?? "";
    const image = `${HOST}${blog.cover.url}` || "";
    return {
      title: `my MDD diary | ${title}`,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: [{ url: image, width: 1200, height: 600, alt: "blog image" }],
      },
    };
  } catch (error) {
    return {
      title: "my MDD diary | Not Found",
      description: "Blog not found",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ "blog-slug": string }>;
}) {
  const { "blog-slug": slug } = await params;
  const blogDetail = await fetchBlogDetail(slug);

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
      <BlogContainer>
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
          createdAt={""}
          updatedAt={""}
        />
        {/* Chia sẻ mạng xã hội */}
        <Section flexDirection="row">
          <Text $variant="h4" className="uppercase">
            Chia sẻ bài viết qua
          </Text>
          <FacebookIC />
          <TwitterIC />
          <LinkedinIC />
        </Section>

        {/* Các bài viết liên quan */}
        <Section flexDirection="column">
          <Text $variant="h4" className="uppercase">
            Các bài viết liên quan
          </Text>
          <BlogGrid>
            {blogs.map((item, index) => (
              <SmallPostCard key={index} {...item} />
            ))}
          </BlogGrid>
        </Section>

        <Section>
          <Text $variant="h4" className="uppercase">
            Leave a comment
          </Text>
          <CommentWrapper documentId={blogDetail.documentId} />
        </Section>
      </BlogContainer>
    </PageContainer>
  );
}
