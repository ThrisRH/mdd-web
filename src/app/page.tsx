import { H0 } from "@/components/Typography/Heading.styles";
import PageContainer from "@/components/Main/PageContainer";
import PostCard from "@/components/PostCard/PostCard";
import PaginationBar from "@/components/Pagination/PaginationBar";
import { BlogDetails } from "@/types/blog";
import PaginationWrapper from "@/components/Pagination/PaginationWrapper";
import NotFound from "@/components/Main/NotFound";

interface PageProps {
  searchParams?: { page?: string };
}

async function getBlogs(pageNumber: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/blogs?pagination[page]=${pageNumber}&pagination[pageSize]=3&populate=*&sort=createdAt:desc`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function generateMetadata() {
  try {
    const data = await getBlogs(1);
    const blogs: BlogDetails[] = data.data;

    const description = blogs
      .map((p) =>
        Array.isArray(p.mainContent)
          ? p.mainContent.map((c) => c.content).join(" ")
          : p.mainContent ?? ""
      )
      .join(" | ")
      .slice(0, 160);

    const title = blogs[0].title;

    const image = blogs.map((item) => item.cover.url || "");

    return {
      title: "my MDD diary",
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: image,
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
      <div className="flex-2 flex flex-col items-center gap-10 md:gap-[50px]">
        <H0>Blog</H0>

        <PaginationWrapper page={pageNumber} totalPages={pageCount} />
      </div>
    </PageContainer>
  );
}
