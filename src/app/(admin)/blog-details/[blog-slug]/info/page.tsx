import React from "react";
import BlogDetailScreen from "@/app/screens/blog-detail/detail";
import { fetchBlogDetail } from "@/utils/data/FetchBlogDetail";

type Props = {
  params: Promise<{ "blog-slug": string }>;
};

export default async function BlogInfoPage({ params }: Props) {
  const { "blog-slug": slug } = await params;
  const blogDetail = await fetchBlogDetail(slug);

  // Đảm bao set value vào context trước khi mount
  return <BlogDetailScreen blogDetail={blogDetail} />;
}
