"use client";
import { Body1 } from "@/components/Typography/Body.styles";
import FavoriteArea from "@/assets/svg/favoriteArea";
import { Blog } from "@/components/Main/PageContainer";

const FavoriteField = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <FavoriteArea className="w-full max-w-[320px] h-fit">
      <ol className="list-decimal list-inside w-full flex gap-6 flex-col">
        {blogs.map((blog) => (
          <li className="w-full" key={blog.id}>
            <Body1 $color="#000" className="w-full">
              {blog.title}
            </Body1>
          </li>
        ))}
      </ol>
    </FavoriteArea>
  );
};

export default FavoriteField;
