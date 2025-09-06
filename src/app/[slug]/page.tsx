import NotFound from "@/components/Main/NotFound";
import PageContainer from "@/components/Main/PageContainer";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import PaginationWrapper from "@/components/Pagination/PaginationWrapper";
import { H0 } from "@/components/Typography/Heading.styles";
import { BlogDetails } from "@/types/blog";

const API_URL = process.env.SERVER_HOST;

// Props
interface CatePageProps {
  params: { slug: string };
  searchParams: { page?: string };
}

// Function
async function getCateInfo(cateId: string) {
  try {
    const res = await fetch(`${API_URL}/api/cates/${cateId}`, {
      cache: "no-store",
    });
    return await res.json();
  } catch {
    throw new Error("Failed to fetch cate");
  }
}

async function getBlogsByCate(cateId: string, pageNumber: number) {
  try {
    const res = await fetch(
      `${API_URL}/api/blogs?filters[cate][documentId][$eq]=${cateId}&populate=cover&pagination[page]=${pageNumber}&pagination[pageSize]=3&sort=createdAt:desc`,
      { cache: "no-store" }
    );
    return await res.json();
  } catch {
    throw new Error("Failed to fetch blogs");
  }
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const slug = params.slug;
    const cate = await getCateInfo(slug);

    if (!cate || !cate.data)
      return {
        title: "my MDD diary | Category",
        description: "Blog not found",
      };

    const data = await getBlogsByCate(slug, 1);
    const blogs: BlogDetails[] = data.data;

    if (!blogs?.length) {
      return {
        title: `my MDD diary | ${cate.data.tile}`,
        description: "No blogs found",
      };
    }

    const description = blogs[0].mainContent.slice(0, 160) || "";
    const image = `${API_URL}${blogs[0].cover.url}` || "";

    return {
      title: `my MDD diary | ${cate.data.tile}`,
      description,
      openGraph: {
        title: cate.data.tile,
        description,
        images: [{ url: image, width: 1200, height: 600, alt: "cover" }],
      },
    };
  } catch {
    return { title: "my MDD diary | Category", description: "Blog not found" };
  }
}

// Page
export default async function CatePage({
  params,
  searchParams,
}: CatePageProps) {
  const { slug } = params;
  const pageNumber = parseInt(searchParams?.page ?? "1");

  const cate = await getCateInfo(slug);
  console.log("Cate: ", cate);
  if (cate.data === null || cate === "") {
    return (
      <PageContainer>
        <NotFound />;
      </PageContainer>
    );
  }

  const blogData = await getBlogsByCate(slug, pageNumber);

  return (
    <PageContainer>
      <BlogContainer>
        <H0>{cate.data.tile}</H0>

        <PaginationWrapper
          totalPages={blogData.meta.pagination.pageCount}
          page={pageNumber}
          slug={slug}
          type="category"
        />
      </BlogContainer>
    </PageContainer>
  );
}
