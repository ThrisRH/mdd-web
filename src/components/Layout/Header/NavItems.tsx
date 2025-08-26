"use client";
import { Dropdown, DropdownItem, NavItem } from "./Header.styles";
import SearchIC from "@/assets/svg/search";
import ArrowIC from "@/assets/svg/arrowdown";
import CancelIC from "@/assets/svg/cancel";
import MoreIC from "@/assets/svg/more";
import { Body2 } from "../../Typography/Body.styles";
import { usePathname, useRouter } from "next/navigation";
import { H5 } from "../../Typography/Heading.styles";
import Link from "next/link";
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
    </>
  );
};

export default NavItems;
