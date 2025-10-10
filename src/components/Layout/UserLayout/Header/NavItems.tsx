"use client";
import { Dropdown, DropdownItem, NavItem } from "./Header.styles";
import SearchIC from "@/assets/svg/search";
import ArrowIC from "@/assets/svg/arrowdown";
import { Body2 } from "../../../Typography/Body.styles";
import { H5 } from "../../../Typography/Heading.styles";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { CateProps } from "../../DesktopNav";

interface Props {
  pathname: string;
  cate: CateProps[];
  open: boolean;
  setOpen: (v: boolean) => void;
  onNavPhoneClose?: () => void;
  handleSearchByCate: (id: string) => void;
  isRelative?: boolean;
  onSearch?: () => void;
}

const NavItems = ({
  pathname,
  cate,
  open,
  setOpen,
  onNavPhoneClose,
  handleSearchByCate,
  isRelative = false,
  onSearch,
}: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  const tokenExists = !!session;
  console.log(tokenExists);

  // Hàm đăng nhập
  const handleLogin = async () => {
    router.push("/auth/login");
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <NavItem>
        <Link href="/">
          <H5
            $size={18}
            onClick={onNavPhoneClose ?? onNavPhoneClose}
            $color={pathname === "/" ? "#EA8E31" : "#fff"}
          >
            TRANG CHỦ
          </H5>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/about">
          <H5
            $size={18}
            onClick={onNavPhoneClose ?? onNavPhoneClose}
            $color={pathname === "/about" ? "#EA8E31" : "#fff"}
          >
            GIỚI THIỆU
          </H5>
        </Link>
      </NavItem>

      <NavItem onClick={() => setOpen(!open)}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <H5
            $size={18}
            $color={
              pathname.startsWith("/category") || pathname.startsWith("/blogs")
                ? "#EA8E31"
                : "#fff"
            }
          >
            CHỦ ĐỀ
          </H5>
          <ArrowIC
            className={`${open ? "rotate-180" : ""}`}
            fill={
              pathname.startsWith("/category") || pathname.startsWith("/blogs")
                ? "#EA8E31"
                : "#fff"
            }
          />
        </div>
        {open && (
          <Dropdown $relative={isRelative}>
            {cate.map((item, i) => (
              <DropdownItem
                $relative={isRelative}
                key={i}
                onClick={() => handleSearchByCate(item.documentId)}
              >
                <Body2
                  $color="#fff"
                  onClick={onNavPhoneClose ?? onNavPhoneClose}
                  $hoverColor="#EA8E31"
                >
                  {item.tile}
                </Body2>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </NavItem>

      <NavItem>
        <Link href="/FAQ">
          <H5
            $size={18}
            onClick={onNavPhoneClose ?? onNavPhoneClose}
            $color={pathname === "/FAQ" ? "#EA8E31" : "#fff"}
          >
            HỎI ĐÁP
          </H5>
        </Link>
      </NavItem>

      {onSearch && (
        <NavItem onClick={onSearch}>
          <SearchIC />
        </NavItem>
      )}

      {/* Nút đăng nhập / đăng xuất */}
      <NavItem onClick={tokenExists ? handleLogout : handleLogin}>
        <H5 $size={18} $color="#fff">
          {tokenExists ? "Đăng xuất" : "Đăng nhập"}
        </H5>
      </NavItem>
    </>
  );
};

export default NavItems;
