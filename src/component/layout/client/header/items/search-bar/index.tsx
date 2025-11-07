"use client";
import React, { useState } from "react";
import CancelIC from "@/assets/svg/cancel";
import {
  ButtonSearch,
  CancelButton,
  Input,
  SearchBarContainer,
  SearchIConWrapper,
  SearchMainField,
} from "./styled";
import SearchIC from "@/assets/svg/search";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  onCancel: () => void;
}

const SearchBar = ({ onCancel }: SearchBarProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
        <SearchIConWrapper>
          <SearchIC fill="#EA8E31" />
        </SearchIConWrapper>
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
          <h5>Tìm kiếm</h5>
        </ButtonSearch>
      </SearchMainField>
      <CancelButton onClick={onCancel}>
        <CancelIC />
      </CancelButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
