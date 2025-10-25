import PaginatedBlogList from "@/components/Layout/Pagination/PaginatedBlogList";
import NotFound from "@/components/Main/NotFound";
import PageContainer from "@/components/Main/PageContainer";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import { BlogDetails } from "@/types/blog";
import { Text } from "@/styles/theme/typography";

const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

// Props
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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
export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const slug = params.slug;

  try {
    const cate = await getCateInfo(slug);

    if (!cate?.data)
      return {
        title: "my MDD diary | Category",
        description: "Blog not found",
      };

    const data = await getBlogsByCate(slug, 1);
    const blogs: BlogDetails[] = data.data;

    if (!blogs?.length)
      return {
        title: `my MDD diary | ${cate.data.tile}`,
        description: "No blogs found",
      };

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
export default async function CatePage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const slug = params.slug;
  const query = searchParams.query;
  const pageRaw = query ?? "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr);

  const cate = await getCateInfo(slug);
  if (!cate?.data) {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }

  const blogData = await getBlogsByCate(slug, pageNumber);

  return (
    <PageContainer>
      <BlogContainer>
        <Text $variant="h0">{cate.data.tile}</Text>

        <PaginatedBlogList
          totalPages={blogData.meta.pagination.pageCount}
          page={pageNumber}
          slug={slug}
          type="category"
        />
      </BlogContainer>
    </PageContainer>
  );
}
