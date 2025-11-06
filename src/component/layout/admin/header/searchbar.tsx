"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  AdminSearchBarContainer,
  AdminSearchMainField,
  ButtonSearch,
  Input,
  Overlay,
  SearchIConWrapper,
  SearchResultArea,
} from "../../client/header/items/search-bar/styled";
import SearchIC from "@/assets/svg/search";
import { Body, Text } from "@/styles/theme/temp-typo";
import { BlogDetails } from "@/types/blog";
import { handleError } from "@/utils/handle-error";
import SearchBlogCard from "./search-blog-card";
import { BoxTitle } from "./styled";
import { Row } from "@/styles/common";
import { LoadingBar, SearchResultContainer } from "./search-blog-card/styled";

const SearchBarAdmin = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<BlogDetails[] | []>([]);

  const fetchBlogSearch = async (search: string) => {
    try {
      const result = await fetch(
        `/mmdblogsapi/blogs/by-title/${search}?populate=*`,
      );
      if (!result.ok) {
        return setBlogs([]);
      }
      const blogs = await result.json();
      setBlogs(blogs.data);
    } catch (error) {
      handleError();
    } finally {
      setIsLoading(false);
    }
  };

  // search debounce

  const debounce = <T extends (...args: any[]) => any>(
    callback: T,
    waitFor: number,
  ) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): ReturnType<T> => {
      let result: any;
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        result = callback(...args);
      }, waitFor);
      return result;
    };
  };

  const debounceDropdown = useCallback(
    debounce((nextValue) => fetchBlogSearch(nextValue), 1500),
    [],
  );

  function handleInputOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsLoading(true);

    const { value } = e.target;
    setSearchValue(value);
    debounceDropdown(value);
  }

  return (
    <AdminSearchBarContainer>
      <AdminSearchMainField $isFocus={isFocus}>
        <SearchIConWrapper>
          <SearchIC fill="#EA8E31" />
        </SearchIConWrapper>
        <Input
          placeholder="Tìm kiếm"
          onFocus={() => setIsFocus(true)}
          onChange={(e) => handleInputOnchange(e)}
          value={searchValue}
          $color="#000"
        />
      </AdminSearchMainField>

      {isFocus && (
        <>
          <Overlay onClick={() => setIsFocus(false)} />
          <SearchResultArea>
            {isLoading && <LoadingBar />}
            <BoxTitle>
              <Text $variant="h3">Kết quả tìm kiếm</Text>
            </BoxTitle>
            <SearchResultContainer>
              {blogs.length > 0 ? (
                blogs.map((item) => (
                  <SearchBlogCard
                    setOnFocus={setIsFocus}
                    setSearchValue={setSearchValue}
                    blog={item}
                    key={item.documentId}
                  />
                ))
              ) : (
                <Row $justify="center">
                  <Body>Không có bài viết phù hợp</Body>
                </Row>
              )}
            </SearchResultContainer>
          </SearchResultArea>
        </>
      )}
    </AdminSearchBarContainer>
  );
};

export default SearchBarAdmin;
