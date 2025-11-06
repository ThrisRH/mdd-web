"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HeaderContainer } from "./styled";
import SearchBar from "./items/search-bar";
import MobileMenu from "./mobile-header";
import NavOverlay from "./items/nav-overlay";
import DesktopNav, { CateProps } from "./items/desktop-nav";
import { toast } from "react-toastify";
import { handleError } from "@/utils/handle-error";

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
    } catch (error: any) {
      handleError();
    }
  };

  const handleSearchByCate = (id: string) => {
    setIsNavOpen(false);
    router.push(`/category/${id}`);
  };

  const handleOnToDetail = () => {
    setIsNavOpen(false);
    router.push("/user-details");
  };

  useEffect(() => {
    handleGetCate();
  }, []);

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
