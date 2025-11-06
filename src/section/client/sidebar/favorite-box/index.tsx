"use client";
import FavoriteArea from "@/assets/svg/favorite-area";
import { useRouter } from "next/navigation";
import { Text } from "@/styles/theme/typography";
import { BlogItem, BlogList } from "../styled";
import { useEffect, useState } from "react";
import { BlogDetails } from "@/types/blog";

const FavoriteField = () => {
  const [blogs, setBlogs] = useState<BlogDetails[]>([]);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "/mmdblogsapi/blogs?pagination[page]=1&pagination[pageSize]=6&populate=*",
      );
      const data = await res.json();
      if (!res.ok) return;
      setBlogs(data.data);
    } catch (err) {
      return null;
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleToDetail = (blogSlug: string) => {
    router.push(`/blogs/${blogSlug}`);
  };
  return (
    <FavoriteArea className="w-full max-w-[320px] h-fit">
      <BlogList>
        {blogs.map((blog, index) => (
          <BlogItem
            onClick={() => handleToDetail(blog.slug)}
            key={blog.documentId}
          >
            <Text $variant="body1" $whiteSpace="normal" className="w-full">
              {`${index + 1}.   ${blog.title}`}
            </Text>
          </BlogItem>
        ))}
      </BlogList>
    </FavoriteArea>
  );
};

export default FavoriteField;
