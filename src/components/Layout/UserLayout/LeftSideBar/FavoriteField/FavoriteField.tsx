"use client";
import { Body1 } from "@/components/Typography/Body.styles";
import FavoriteArea from "@/assets/svg/favoriteArea";
import { Blog } from "@/components/Main/PageContainer";
import { BlogItem, BlogList } from "../styled";
import { useRouter } from "next/navigation";

const FavoriteField = ({ blogs }: { blogs: Blog[] }) => {
  const router = useRouter();
  const handleToDetail = (blogSlug: string) => {
    router.push(`/blogs/${blogSlug}`);
  };
  return (
    <FavoriteArea className="w-full max-w-[320px] h-fit">
      <BlogList>
        {blogs.map((blog) => (
          <BlogItem onClick={() => handleToDetail(blog.slug)} key={blog.id}>
            <Body1 $color="#000" className="w-full">
              {blog.title}
            </Body1>
          </BlogItem>
        ))}
      </BlogList>
    </FavoriteArea>
  );
};

export default FavoriteField;
