import PageContainer from "@/components/Main/PageContainer";
import { BlogDetails } from "@/types/blog";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import PaginatedBlogList from "@/components/Layout/Pagination/PaginatedBlogList";
import { Text } from "@/styles/theme/typography";
import NotFound from "@/components/Main/NotFound";
import { fetchBlog } from "@/utils/data/BlogAPI";

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

// props
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// Tạo metadata
export async function generateMetadata() {
  try {
    const data = await fetchBlog(1);
    if (!data) return;
    const blogs: BlogDetails[] = data.data;

    const title = blogs[0].title;
    const description = blogs[0].mainContent.slice(0, 160) || "";

    const image = `${API_URL}${blogs[0].cover.url}` || "";

    return {
      title: "my MDD diary",
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: [{ url: image, width: 1200, height: 600, alt: "cover" }],
      },
    };
  } catch {
    return { title: "my MDD diary", description: "Blog not found", image: "" };
  }
}

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const pageRaw = searchParams.page || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr, 10);

  const result = await fetchBlog(pageNumber, 3);

  if (!result) return;

  const pageCount = result.meta.pagination.pageCount;

  return (
    <PageContainer>
      <BlogContainer>
        <Text $variant="h0">Blog</Text>
        {!result || result.data.length === 0 ? (
          <NotFound />
        ) : (
          <PaginatedBlogList totalPages={pageCount} page={pageNumber} />
        )}
      </BlogContainer>
    </PageContainer>
  );
}
