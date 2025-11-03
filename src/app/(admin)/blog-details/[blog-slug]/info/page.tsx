import React from "react";
import BlogDetailScreen from "@/app/screens/blog-detail/detail";
import { fetchBlogDetail } from "@/utils/data/BlogAPI";

type Props = {
  params: Promise<{ "blog-slug": string }>;
};

export default async function BlogInfoPage({ params }: Props) {
  const { "blog-slug": slug } = await params;
  const blogDetail = await fetchBlogDetail(slug);

  if (!blogDetail) return;

  return <BlogDetailScreen blogDetail={blogDetail} />;
}
