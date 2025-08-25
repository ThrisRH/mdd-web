"use client";
import React, { useState } from "react";
import CancelIC from "@/assets/svg/cancel";
import {
  ButtonSearch,
  Input,
  SearchBarContainer,
  SearchMainField,
} from "./SearchBar.styles";
import SearchIC from "@/assets/svg/search";
import { useRouter } from "next/navigation";
import { H5 } from "@/components/Typography/Heading.styles";

interface SearchBarProps {
  onCancel: () => void;
}

const SearchBar = ({ onCancel }: SearchBarProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();

  const onKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearch(searchValue);
    }
  };

  const handleSearch = (title: string) => {
    if (title !== null && title !== "") {
      router.push(`/search/${title}`);
    }
  };
  return (
    <SearchBarContainer>
      <SearchMainField $isFocus={isFocus}>
        <div className="flex flex-0 items-center">
          <SearchIC fill="#EA8E31" />
        </div>
        <Input
          placeholder="Tìm kiếm"
          onFocus={() => setIsFocus(true)}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={onKeyDown}
          value={searchValue}
        />
        <ButtonSearch
          onClick={() => handleSearch(searchValue)}
          $primary={false}
        >
          <H5 $size={14}>Tìm kiếm</H5>
        </ButtonSearch>
      </SearchMainField>
      <button onClick={onCancel} className="cursor-pointer">
        <CancelIC />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
