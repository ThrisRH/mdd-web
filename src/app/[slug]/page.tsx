import NotFound from "@/components/Main/NotFound";
import PageContainer from "@/components/Main/PageContainer";
import { BlogContainer } from "@/components/Main/Styled/PageContainer.styles";
import PaginationWrapper from "@/components/Pagination/PaginationWrapper";
import { H0 } from "@/components/Typography/Heading.styles";
import { BlogDetails } from "@/types/blog";
import React from "react";

const API_URL = process.env.SERVER_HOST;

// Lấy thông tin cate
async function getCateInfo(cateId: string) {
  try {
    const res = await fetch(`${API_URL}/api/cates/${cateId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

// Lấy các bài blogs trong cate
async function getBlogsByCate(cateId: string, pageNumber: number) {
  try {
    const res = await fetch(
      `${API_URL}/api/blogs?filters[cate][documentId][$eq]=${cateId}&populate=cover&pagination[page]=${pageNumber}&pagination[pageSize]=3&sort=createdAt:desc`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}

// MetaData
export async function generateMetadata({
  params,
}: {
  params: { slug: string; cateId: string };
}) {
  try {
    const slug = params.slug;
    const cate = await getCateInfo(slug);

    // Lấy blogs
    const data = await getBlogsByCate(slug, 1);
    const blogs: BlogDetails[] = data.data;

    const title = cate.data.tile;
    const description = blogs[0].mainContent.slice(0, 160) || "";
    const image = `${API_URL}${blogs[0].cover.url}` || "";

    return {
      title: `my MDD diary | ${title}`,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: [{ url: image, width: 1200, height: 600, alt: "cover" }],
      },
    };
  } catch (error) {
    return {
      title: "my MDD diary | Category",
      description: "Blog not found",
    };
  }
}

export default async function CatePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const cate = await getCateInfo(slug);
  const blogData = await getBlogsByCate(slug, 1);
  console.log("Cate", cate);

  if (!cate || cate.data === null)
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  return (
    <PageContainer>
      <BlogContainer>
        <H0>{cate.data.tile}</H0>

        <PaginationWrapper
          totalPages={blogData.meta.pagination.pageCount}
          page={1}
          slug={slug}
          type="category"
        />
      </BlogContainer>
    </PageContainer>
  );
}
