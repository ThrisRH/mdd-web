"use client";
import React from "react";
import { NavList, NavWrapper } from "./Header.styles";
import NavItems from "./NavItems";
import { BlogDetails } from "@/types/blog";

export interface CateProps {
  id: number;
  tile: string;
  documentId: string;
  slug: string;
  blogs: BlogDetails[];
  createdAt: string;
  publishedAt: string;
}

interface Props {
  cate: CateProps[];
  pathname: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  handleSearchByCate: (id: string) => void;
  onSearch: () => void;
}

const DesktopNav: React.FC<Props> = ({
  cate,
  pathname,
  open,
  setOpen,
  handleSearchByCate,
  onSearch,
}) => {
  return (
    <NavWrapper>
      <NavList>
        <NavItems
          pathname={pathname}
          cate={cate}
          open={open}
          setOpen={setOpen}
          handleSearchByCate={handleSearchByCate}
          isRelative={false}
          onSearch={onSearch}
        />
      </NavList>
    </NavWrapper>
  );
};

export default DesktopNav;
