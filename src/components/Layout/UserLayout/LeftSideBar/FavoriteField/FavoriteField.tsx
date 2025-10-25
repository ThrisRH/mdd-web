"use client";
import FavoriteArea from "@/assets/svg/favoriteArea";
import { Blog } from "@/components/Main/PageContainer";
import { BlogItem, BlogList } from "../styled";
import { useRouter } from "next/navigation";
import { Text } from "@/styles/theme/typography";

const FavoriteField = ({ blogs }: { blogs: Blog[] }) => {
  const router = useRouter();
  const handleToDetail = (blogSlug: string) => {
    router.push(`/blogs/${blogSlug}`);
  };
  return (
    <FavoriteArea className="w-full max-w-[320px] h-fit">
      <BlogList>
        {blogs.map((blog, index) => (
          <BlogItem onClick={() => handleToDetail(blog.slug)} key={blog.id}>
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
