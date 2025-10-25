import PageContainer from "@/components/Main/PageContainer";
import { BlogDetails } from "@/types/blog";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import { notFound } from "next/navigation";
import PaginatedBlogList from "@/components/Layout/Pagination/PaginatedBlogList";
import { Text } from "@/styles/theme/typography";

const API_URL = process.env.SERVER_HOST;

// props
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function getBlogs(pageNumber: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      return null;
    }
    return await res.json();
  } catch (error) {
    return null;
  }
}

// Tạo metadata
export async function generateMetadata() {
  try {
    const data = await getBlogs(1);
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
  const query = searchParams.query;
  const pageRaw = query || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr);

  const data = await getBlogs(pageNumber);

  if (!data) {
    notFound();
  }

  const pageCount = data.meta.pagination.pageCount;

  return (
    <PageContainer>
      <BlogContainer>
        <Text $variant="h0">Blog</Text>

        <PaginatedBlogList totalPages={pageCount} page={pageNumber} />
      </BlogContainer>
    </PageContainer>
  );
}
