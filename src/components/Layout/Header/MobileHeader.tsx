"use client";
import React from "react";
import MoreIC from "@/assets/svg/more";
import SearchIC from "@/assets/svg/search";

interface Props {
  onOpenNav: () => void;
  onSearch: () => void;
}

const MobileMenu: React.FC<Props> = ({ onOpenNav, onSearch }) => {
  return (
    <div className="md:hidden flex w-full justify-between px-4">
      <button onClick={onOpenNav}>
        <MoreIC />
      </button>
      <button onClick={onSearch}>
        <SearchIC />
      </button>
    </div>
  );
};

export default MobileMenu;
