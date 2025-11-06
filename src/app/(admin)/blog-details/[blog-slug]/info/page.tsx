import React from "react";
import BlogDetailScreen from "@/app/screens/admin/blog-detail/detail";
import { fetchBlogDetail } from "@/utils/data/blog-api";

type Props = {
  params: Promise<{ "blog-slug": string }>;
};

export default async function BlogInfoPage({ params }: Props) {
  const { "blog-slug": slug } = await params;
  const blogDetail = await fetchBlogDetail(slug);

  if (!blogDetail) return;

  return <BlogDetailScreen blogDetail={blogDetail} />;
}
