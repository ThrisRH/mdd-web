import { H0 } from "@/components/Typography/Heading.styles";
import PageContainer from "@/components/Main/PageContainer";
import { BlogDetails } from "@/types/blog";
import PaginationWrapper from "@/components/Pagination/PaginationWrapper";
import NotFound from "@/components/Main/NotFound";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";

interface PageProps {
  searchParams?: { page?: string };
}

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

async function getBlogs(pageNumber: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
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

export default async function Home({ searchParams }: PageProps) {
  const pageNumber = parseInt(searchParams?.page ?? "1");

  let data;
  try {
    data = await getBlogs(pageNumber);
  } catch {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }

  const pageCount = data.meta.pagination.pageCount;

  return (
    <PageContainer>
      <BlogContainer>
        <H0>Blog</H0>

        <PaginationWrapper totalPages={pageCount} page={1} />
      </BlogContainer>
    </PageContainer>
  );
}
