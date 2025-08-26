"use client";
import { Body1 } from "@/components/Typography/Body.styles";
import FavoriteArea from "@/assets/svg/favoriteArea";
import { Blog } from "@/components/Main/PageContainer";
import { BlogItem, BlogList } from "../Sidebar.styles";

const FavoriteField = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <FavoriteArea className="w-full max-w-[320px] h-fit">
      <BlogList>
        {blogs.map((blog) => (
          <BlogItem key={blog.id}>
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
