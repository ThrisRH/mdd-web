import React from "react";
import CommentScreen from "@/app/screens/admin/blog-detail/comment";
import { fetchComment } from "@/utils/data/comment-api";
import { fetchBlogDetail } from "@/utils/data/blog-api";
import NotFound from "@/section/client/main/not-found";

type Props = {
  params: Promise<{ "blog-slug": string }>;
};

export default async function BlogInfoPage({ params }: Props) {
  try {
    const { "blog-slug": slug } = await params;
    const blogDetails = await fetchBlogDetail(slug);
    const comments = await fetchComment(slug);
    console.log(comments);

    if (!blogDetails) return;
    return <CommentScreen comments={comments} blogDetail={blogDetails} />;
  } catch (error) {
    return <NotFound />;
  }
}
