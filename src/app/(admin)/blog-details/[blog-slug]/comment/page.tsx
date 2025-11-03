import React from "react";
import CommentScreen from "@/app/screens/blog-detail/comment";
import { fetchComment } from "@/utils/data/FetchComment";
import { fetchBlogDetail } from "@/utils/data/BlogAPI";

type Props = {
  params: Promise<{ "blog-slug": string }>;
};

export default async function BlogInfoPage({ params }: Props) {
  const { "blog-slug": slug } = await params;
  const blogDetails = await fetchBlogDetail(slug);
  const comments = await fetchComment(slug);

  if (!blogDetails) return;
  return <CommentScreen comments={comments} blogDetail={blogDetails} />;
}
