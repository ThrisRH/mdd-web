"use client";
import { Dropdown, DropdownItem, NavItem } from "./Header.styles";
import SearchIC from "@/assets/svg/search";
import ArrowIC from "@/assets/svg/arrowdown";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { CateProps } from "./DesktopNav";
import { Text } from "@/styles/theme/typography";

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
  const [role, setRole] = useState();
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

  const fetchUserRole = async () => {
    const token = session?.strapiToken;

    const response = await fetch("/mmdblogsapi/users/me", {
      method: "GET",
      headers: { Authorization: `bearer ${token}` },
    });
    const data = await response.json();
    setRole(data.isAuthor);
    console.log(data);
    console.log(session);
  };
  useEffect(() => {
    fetchUserRole();
  }, [session]);

  return (
    <>
      <NavItem>
        <Link href="/">
          <Text
            $variant="h5"
            $size={18}
            onClick={onNavPhoneClose ?? onNavPhoneClose}
            $color={pathname === "/" ? "#EA8E31" : "#fff"}
          >
            TRANG CHỦ
          </Text>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/about">
          <Text
            $variant="h5"
            $size={18}
            onClick={onNavPhoneClose ?? onNavPhoneClose}
            $color={pathname === "/about" ? "#EA8E31" : "#fff"}
          >
            GIỚI THIỆU
          </Text>
        </Link>
      </NavItem>

      <NavItem onClick={() => setOpen(!open)}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Text
            $variant="h5"
            $size={18}
            $color={
              pathname.startsWith("/category") || pathname.startsWith("/blogs")
                ? "#EA8E31"
                : "#fff"
            }
          >
            CHỦ ĐỀ
          </Text>
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
        <Link href="/FAQ">
          <Text
            $variant="h5"
            $size={18}
            onClick={onNavPhoneClose ?? onNavPhoneClose}
            $color={pathname === "/FAQ" ? "#EA8E31" : "#fff"}
          >
            HỎI ĐÁP
          </Text>
        </Link>
      </NavItem>

      {onSearch && (
        <NavItem onClick={onSearch}>
          <SearchIC />
        </NavItem>
      )}

      {/* Nút đăng nhập / đăng xuất */}
      <NavItem onClick={tokenExists ? handleLogout : handleLogin}>
        <Text $size={18} $color="#fff">
          {tokenExists ? "Đăng xuất" : "Đăng nhập"}
        </Text>
      </NavItem>

      {role && (
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
