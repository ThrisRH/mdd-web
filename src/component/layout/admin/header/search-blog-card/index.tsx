import React from "react";
import { BlogDetails } from "@/types/blog";
import { Column } from "@/styles/common";
import { Body, Text } from "@/styles/theme/temp-typo";
import { MainContent } from "@/section/admin/styles/Page.styles";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBlogCardWrapper } from "./styled";

export type SearchBlogCardProps = {
  blog: BlogDetails;
  setOnFocus: (v: boolean) => void;
  setSearchValue: (v: string) => void;
};

const SearchBlogCard = ({
  blog,
  setOnFocus,
  setSearchValue,
}: SearchBlogCardProps) => {
  const router = useRouter();

  const handleToBlog = (slug: string) => {
    router.push(`/blog-details/${slug}/info`);
    setOnFocus(false);
    setSearchValue("");
  };
  return (
    <SearchBlogCardWrapper onClick={() => handleToBlog(blog.slug)}>
      <ImageContainer $variant="fit-image">
        <Image
          className="rounded-md"
          src={
            blog.cover.url.startsWith("https")
              ? blog.cover.url
              : `/baseurl${blog.cover.url}`
          }
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      <Column $gap="none">
        <Body>{blog.title}</Body>
        <MainContent>
          <Text $variant="body4" color="#7a7a7a">
            {blog.mainContent}
          </Text>
        </MainContent>
      </Column>
    </SearchBlogCardWrapper>
  );
};

export default SearchBlogCard;
