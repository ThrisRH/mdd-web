"use client";
import { Dropdown, DropdownItem, NavItem } from "../styled";
import SearchIC from "@/assets/svg/search";
import ArrowIC from "@/assets/svg/arrow-down";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { CateProps } from "./desktop-nav";
import { Text } from "@/styles/theme/temp-typo";
import { useAppSelector } from "@/redux/hook";
import { Row } from "@/styles/common";
import { TextCanChangeColor } from "@/styles/typography";

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
          <TextCanChangeColor
            $defaultColor="header"
            $isActive={pathname === "/"}
          >
            TRANG CHỦ
          </TextCanChangeColor>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/about">
          <TextCanChangeColor
            $defaultColor="header"
            $isActive={pathname === "/about"}
          >
            GIỚI THIỆU
          </TextCanChangeColor>
        </Link>
      </NavItem>

      <NavItem onClick={() => setOpen(!open)}>
        <Row $align="center">
          <TextCanChangeColor
            $defaultColor="header"
            $isActive={
              pathname.startsWith("/category") || pathname.startsWith("/blogs")
            }
          >
            CHỦ ĐỀ
          </TextCanChangeColor>

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
                $relative={isRelative}
                key={i}
                onClick={() => handleSearchByCate(item.documentId)}
              >
                <Text
                  $variant="body2"
                  onClick={onNavPhoneClose ?? onNavPhoneClose}
                  $color="#fff"
                  $hoverColor="#EA8E31"
                >
                  {item.tile}
                </Text>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </NavItem>

      <NavItem>
        <Link href="/faq">
          <TextCanChangeColor
            $defaultColor="header"
            $isActive={pathname === "/faq"}
          >
            HỎI ĐÁP
          </TextCanChangeColor>
        </Link>
      </NavItem>

      {onSearch && (
        <NavItem onClick={onSearch}>
          <SearchIC />
        </NavItem>
      )}

      {/* Nút đăng nhập / đăng xuất */}
      <NavItem onClick={tokenExists ? handleLogout : handleLogin}>
        <TextCanChangeColor $defaultColor="header">
          {tokenExists ? "Đăng xuất" : "Đăng nhập"}
        </TextCanChangeColor>
      </NavItem>

      {isAdmin && (
        <Link href={"/admin-panel/myblogs"}>
          <Text $variant="body2" $color="#4f6ffa">
            Đến trang quảng lý
          </Text>
        </Link>
      )}
    </>
  );
};

export default NavItems;
