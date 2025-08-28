"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HeaderWrapper } from "./Header.styles";
import SearchBar from "../Search/SearchBar";
import MobileMenu from "./MobileHeader";
import NavOverlay from "./NavOverlay";
import DesktopNav from "../DesktopNav";

interface CateProps {
  id: number;
  tile: string;
  documentId: string;
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cate, setCate] = useState<CateProps[]>([]);

  const router = useRouter();
  const pathname = usePathname();

  const handleGetCate = async () => {
    try {
      const response = await fetch("/mmdblogsapi/cates?populate=*");
      const data = await response.json();
      setCate(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchByCate = (id: string) => {
    setIsNavOpen(false);
    router.push(`/${id}`);
  };

  const handleOnToDetail = () => {
    setIsNavOpen(false);
    router.push("/user-details");
  };

  useEffect(() => {
    handleGetCate();
  }, []);

  if (cate.length === 0) return null;

  return (
    <HeaderWrapper>
      {!isSearch ? (
        <>
          <MobileMenu
            onOpenNav={() => setIsNavOpen(true)}
            onSearch={() => setIsSearch(true)}
          />
          {isNavOpen && (
            <NavOverlay
              cate={cate}
              pathname={pathname}
              open={open}
              setOpen={setOpen}
              handleSearchByCate={handleSearchByCate}
              onClose={() => setIsNavOpen(false)}
              onSearch={() => setIsSearch(true)}
              onToDetail={() => handleOnToDetail()}
            />
          )}
          <DesktopNav
            cate={cate}
            pathname={pathname}
            open={open}
            setOpen={setOpen}
            handleSearchByCate={handleSearchByCate}
            onSearch={() => setIsSearch(true)}
          />
        </>
      ) : (
        <SearchBar onCancel={() => setIsSearch(false)} />
      )}
    </HeaderWrapper>
  );
};

export default Header;
