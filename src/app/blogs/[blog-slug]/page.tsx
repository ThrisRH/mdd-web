"use client";
import PageContainer from "@/components/Main/PageContainer";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BlogDetails } from "@/types/blog";
import PostDetail from "@/components/PostDetailCard/PostDetail";
import { H4 } from "@/components/Typography/Heading.styles";
import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import LinkedinIC from "@/assets/svg/linkedin";
import SectionWrapper from "@/components/Section/SectionWrapper";
import SmallPostCard from "@/components/PostCard/SmallPostCard";
import CommentCard, { CommentProps } from "@/components/Comment/CommentCard";
import NotFound from "@/components/Main/NotFound";
import Loading from "@/components/Main/Loading";
import CommentInput from "@/components/Comment/CommentInput";

const page = () => {
  const params = useParams<{ "blog-slug": string }>();
  const slug = params["blog-slug"];

  const [blogDetail, setBlogDetails] = useState<BlogDetails>();
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [comment, setComment] = useState("");
  const [blogs, setBlogs] = useState<BlogDetails[]>([]);
  const [loadingMain, setLoadingMain] = useState(true);
  const [loadingRelative, setLoadingRelative] = useState(true);

  const handleGetBlogWithComments = async () => {
    setLoadingMain(true);
    try {
      const blogRes = await fetch(
        `http://localhost:1337/api/blogs/by-slug/${slug}`
      );
      const blogData = await blogRes.json();

      if (!blogRes.ok || !blogData.data) {
        setLoadingMain(false);
        return;
      }

      setBlogDetails(blogData.data);

      const blogDocId = blogData.data.documentId;

      const commentRes = await fetch(
        `http://localhost:1337/api/comments?filters[blog][documentId][$eq]=${blogDocId}&populate[reader][populate]=avatar`
      );
      const commentData = await commentRes.json();

      setComments(commentData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMain(false);
    }
  };

  const handleGetBlogsRelative = async (blogDetail: BlogDetails) => {
    setLoadingRelative(true);
    if (!blogDetail?.cate) return;
    try {
      console.log(blogDetail.cate.documentId);
      const res = await fetch(
        `http://localhost:1337/api/blogs?filters[cate][documentId][$eq]=${blogDetail.cate.documentId}&populate=cover&pagination[page]=1&pagination[pageSize]=3`
      );
      const data = await res.json();
      setBlogs(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingRelative(false);
    }
  };

  const handleSubmitComment = useCallback(async () => {
    if (!comment.trim()) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              content: comment,
              reader: "rlz4v0au4gae47o4uocybx0s",
              blog: blogDetail?.documentId,
            },
          }),
        }
      );

      setComment("");
      const data = await response.json();
      if (!response.ok) {
        return console.log(data.error);
      }

      return console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [comment]);

  useEffect(() => {
    handleGetBlogWithComments();
  }, [slug]);

  useEffect(() => {
    if (blogDetail) {
      handleGetBlogsRelative(blogDetail);
    }
  }, [blogDetail]);

  if (loadingMain && loadingRelative) {
    return <Loading />;
  }

  if (!blogDetail) {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }
  return (
    <PageContainer>
      <div className="flex-2 flex flex-col items-center gap-[50px]">
        <PostDetail
          slug={blogDetail.slug}
          documentId={blogDetail.documentId}
          title={blogDetail.title}
          publishedAt={blogDetail.publishedAt}
          mainContent={blogDetail.mainContent}
          subContent={blogDetail.subContent}
          optionImage={blogDetail.optionImage}
          cover={blogDetail.cover}
        />
        <SectionWrapper>
          <div className="flex flex-row gap-4">
            <H4 className="uppercase">Chia sẻ bài viết qua</H4>
            <FacebookIC />
            <TwitterIC />
            <LinkedinIC />
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="flex flex-col gap-4 w-full">
            <H4 className="uppercase">Các bài viết liên quan</H4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
              {blogs.map((item, index) => (
                <SmallPostCard key={index} {...item} />
              ))}
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="flex flex-col gap-4 w-full">
            <H4 className="uppercase">Leave a comments</H4>
            {comments.map((item) => (
              <CommentCard
                key={item.documentId}
                documentId={item.documentId}
                reader={item.reader}
                content={item.content}
              />
            ))}
            <CommentInput
              comment={comment}
              setComment={setComment}
              handleSubmit={() => handleSubmitComment()}
            />
          </div>
        </SectionWrapper>
      </div>
    </PageContainer>
  );
};

export default page;
