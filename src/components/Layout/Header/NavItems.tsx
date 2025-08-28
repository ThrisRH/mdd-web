"use client";
import { Dropdown, DropdownItem, NavItem } from "./Header.styles";
import SearchIC from "@/assets/svg/search";
import ArrowIC from "@/assets/svg/arrowdown";
import { Body2 } from "../../Typography/Body.styles";
import { H5 } from "../../Typography/Heading.styles";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CateProps {
  id: number;
  tile: string;
  documentId: string;
}

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
  const [token, setToken] = useState<string | null>(null);

  // Kiểm tra token khi component mount
  useEffect(() => {
    const t = document.cookie
      .split("; ")
      .find((c) => c.startsWith("authToken="))
      ?.split("=")[1];
    setToken(t ?? null);
  }, []);

  // Hàm đăng nhập
  const handleLogin = async () => {
    const identifier = prompt("Nhập username:");
    const password = prompt("Nhập password:");
    if (!identifier || !password) return;

    try {
      const res = await fetch("/mmdblogsapi/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();
      if (res.ok && data.jwt) {
        document.cookie = `authToken=${data.jwt}; path=/`;
        setToken(data.jwt);
        alert("Đăng nhập thành công!");
      } else {
        alert(
          "Đăng nhập thất bại: " + (data.message || "Sai tài khoản/mật khẩu")
        );
      }
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra!");
    }
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    document.cookie =
      "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setToken(null);
    alert("Đăng xuất thành công!");
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
              pathname.startsWith("/topic") || pathname.startsWith("/blogs")
                ? "#EA8E31"
                : "#fff"
            }
          >
            CHỦ ĐỀ
          </H5>
          <ArrowIC
            className={`${open ? "rotate-180" : ""}`}
            fill={
              pathname.startsWith("/topic") || pathname.startsWith("/blogs")
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
      <NavItem onClick={token ? handleLogout : handleLogin}>
        <H5 $size={18} $color="#fff">
          {token ? "Đăng xuất" : "Đăng nhập"}
        </H5>
      </NavItem>
    </>
  );
};

export default NavItems;
