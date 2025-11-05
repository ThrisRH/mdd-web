// app/search/[slug]/page.tsx
import PageContainer from "@/components/Main/PageContainer";
import { BlogDetails } from "@/types/blog";
import NotFound from "@/components/Main/NotFound";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import PaginatedBlogList from "@/components/Layout/Pagination/PaginatedBlogList";
import { Text } from "@/styles/theme/typography";
import { handleError } from "@/utils/HandleError";

// props
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;
// Lấy dữ liệu từ Serverside

async function getBlogsByName(title: string, pageNumber: number) {
  try {
    const res = await fetch(
      `${API_URL}/api/blogs/by-title/${title}?pagination=${pageNumber}&pageSize=3&populate=*`,
      { cache: "no-store" },
    );

    const data = await res.json();
    return data || null;
  } catch (error) {
    handleError();
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
  const pageQuery = searchParams.page;
  const pageRaw = pageQuery || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr, 10);

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

  const blogs: BlogDetails[] | undefined = res?.data;
  const pageCount: number | undefined = res?.meta?.pagination?.pageCount;

  if (!blogs || blogs.length === 0 || !pageCount) {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <BlogContainer>
        <Text $variant="h0">Kết quả tìm kiếm cho: {title}</Text>

        <PaginatedBlogList
          page={pageNumber}
          totalPages={pageCount}
          slug={title}
          type="search"
        />
      </BlogContainer>
    </PageContainer>
  );
}
