// app/search/[slug]/page.tsx
import PageContainer from "@/components/Main/PageContainer";
import { H0 } from "@/components/Typography/Heading.styles";
import { BlogDetails } from "@/types/blog";
import NotFound from "@/components/Main/NotFound";
import PaginationWrapper from "@/components/Pagination/PaginationWrapper";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";

interface SearchPageProps {
  params: { slug: string };
  searchParams: { page?: string };
}

const API_URL = process.env.SERVER_HOST;

async function getBlogsByName(title: string, pageNumber: number) {
  try {
    const res = await fetch(
      `${API_URL}/api/blogs/by-title/${title}?page=${pageNumber}&pageSize=3&populate=*`,
      { cache: "no-store" }
    );

    const data = await res.json();
    return data || null;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
}

export async function generateMetadata({ params }: SearchPageProps) {
  try {
    const data = await getBlogsByName(params.slug, 1);
    const blogs: BlogDetails[] = data.data;

    const title = blogs[0].title;
    const description = blogs[0].mainContent.slice(0, 160) || "";

    const image = `${API_URL}${blogs[0].cover.url}`;
    return {
      title: "my MDD diary | Search",
      description,
      openGraph: {
        title: title,
        description: description,
        images: [{ url: image, width: 1200, height: 600, alt: "cover" }],
      },
    };
  } catch (error) {
    return {
      title: "my MDD diary | Search",
      description: "Blog not found",
    };
  }
}

export default async function SearchPage({
  params,
  searchParams,
}: SearchPageProps) {
  const title = decodeURIComponent(params.slug);
  const page = Number(searchParams.page) || 1;

  let res;
  try {
    res = await getBlogsByName(title, page);
  } catch (error) {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }

  const pageCount = res.meta.pagination.pageCount;

  return (
    <PageContainer>
      <BlogContainer>
        <H0>Kết quả tìm kiếm cho: {title}</H0>

        <PaginationWrapper
          page={page}
          totalPages={pageCount}
          slug={title}
          type="search"
        />
      </BlogContainer>
    </PageContainer>
  );
}
