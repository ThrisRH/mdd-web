// app/search/[slug]/page.tsx
import PageContainer from "@/components/Main/PageContainer";
import { H0 } from "@/components/Typography/Heading.styles";
import { BlogDetails } from "@/types/blog";
import NotFound from "@/components/Main/NotFound";
import PaginationWrapper from "@/components/Pagination/PaginationWrapper";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";

// props
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;
// Lấy dữ liệu từ Serverside

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

export async function generateMetadata(props: { params: Params }) {
  try {
    const params = await props.params;
    const slug = params.slug;
    const data = await getBlogsByName(slug, 1);
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

export default async function SearchPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
  const pageRaw = query || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr);

  const title = decodeURIComponent(slug);

  let res;
  try {
    res = await getBlogsByName(title, pageNumber);
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
          page={pageNumber}
          totalPages={pageCount}
          slug={title}
          type="search"
        />
      </BlogContainer>
    </PageContainer>
  );
}
