"use client";
import React from "react";
import MoreIC from "@/assets/svg/more";
import SearchIC from "@/assets/svg/search";
import { HeaderMobileWrapper } from "./Header.styles";

interface Props {
  onOpenNav: () => void;
  onSearch: () => void;
}

const MobileMenu: React.FC<Props> = ({ onOpenNav, onSearch }) => {
  return (
    <HeaderMobileWrapper>
      <button onClick={onOpenNav}>
        <MoreIC />
      </button>
      <button onClick={onSearch}>
        <SearchIC />
      </button>
    </HeaderMobileWrapper>
  );
};

export default MobileMenu;
