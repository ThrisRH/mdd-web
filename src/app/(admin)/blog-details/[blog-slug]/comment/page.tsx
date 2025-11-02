import React from "react";
import CommentScreen from "@/app/screens/blog-detail/comment";
import { fetchComment } from "@/utils/data/FetchComment";
import { fetchBlogDetail } from "@/utils/data/FetchBlogDetail";

type Props = {
  params: Promise<{ "blog-slug": string }>;
};

export default async function BlogInfoPage({ params }: Props) {
  const { "blog-slug": slug } = await params;
  const blogDetails = await fetchBlogDetail(slug);
  const comments = await fetchComment(slug);

  // Đảm bao set value vào context trước khi mount
  return <CommentScreen comments={comments} blogDetail={blogDetails} />;
}
