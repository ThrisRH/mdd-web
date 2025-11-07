"use client";
import { Dropdown, DropdownItem, NavItem } from "../styled";
import SearchIC from "@/assets/svg/search";
import ArrowIC from "@/assets/svg/arrow-down";
import SettingIC from "@/assets/svg/interact/setting";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { CateProps } from "./desktop-nav";
import { useAppSelector } from "@/redux/hook";
import { Row } from "@/styles/common";
import {
  HeadTextCanChangeColor,
  TextCanChangeColor,
} from "@/styles/typography";
import { useState } from "react";

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
  const [settingOpen, setSettingOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const tokenExists = !!session;

  const authInfo = useAppSelector((state) => state.auth);
  const isAdmin = authInfo.isAuthor || null;

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
          <HeadTextCanChangeColor
            $defaultColor="header"
            $isActive={pathname === "/"}
          >
            TRANG CHỦ
          </HeadTextCanChangeColor>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/about">
          <HeadTextCanChangeColor
            $defaultColor="header"
            $isActive={pathname === "/about"}
          >
            GIỚI THIỆU
          </HeadTextCanChangeColor>
        </Link>
      </NavItem>

      <NavItem onClick={() => setOpen(!open)}>
        <Row $align="center">
          <HeadTextCanChangeColor
            $defaultColor="header"
            $isActive={
              pathname.startsWith("/category") || pathname.startsWith("/blogs")
            }
          >
            CHỦ ĐỀ
          </HeadTextCanChangeColor>

          <ArrowIC
            className={`${open ? "rotate-180" : ""}`}
            fill={
              pathname.startsWith("/category") || pathname.startsWith("/blogs")
                ? "#EA8E31"
                : "#fff"
            }
          />
        </Row>
        {open && (
          <Dropdown $relative={isRelative}>
            {cate.map((item, i) => (
              <DropdownItem
                $haveBorder={i < cate.length - 1}
                $relative={isRelative}
                key={i}
                onClick={() => handleSearchByCate(item.documentId)}
              >
                <TextCanChangeColor
                  $align="center"
                  className="body-2"
                  onClick={onNavPhoneClose ?? onNavPhoneClose}
                  $defaultColor="header"
                >
                  {item.tile}
                </TextCanChangeColor>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </NavItem>

      <NavItem>
        <Link href="/faq">
          <HeadTextCanChangeColor
            $defaultColor="header"
            $isActive={pathname === "/faq"}
          >
            HỎI ĐÁP
          </HeadTextCanChangeColor>
        </Link>
      </NavItem>

      {onSearch && (
        <NavItem onClick={onSearch}>
          <SearchIC />
        </NavItem>
      )}

      <NavItem onClick={() => setSettingOpen(!settingOpen)}>
        <SettingIC />
        {settingOpen && (
          <Dropdown $relative={isRelative}>
            {/* Nút đăng nhập / đăng xuất */}
            <DropdownItem
              $haveBorder={true}
              onClick={tokenExists ? handleLogout : handleLogin}
            >
              <TextCanChangeColor $defaultColor="header" $align="center">
                {tokenExists ? "Đăng xuất" : "Đăng nhập"}
              </TextCanChangeColor>
            </DropdownItem>

            {/* Dến trang quản lý */}
            {isAdmin && (
              <DropdownItem>
                <Link href={"/admin-panel/myblogs"}>
                  <TextCanChangeColor $defaultColor="header" $align="center">
                    Đến trang quản lý
                  </TextCanChangeColor>
                </Link>
              </DropdownItem>
            )}
          </Dropdown>
        )}
      </NavItem>
    </>
  );
};

export default NavItems;
