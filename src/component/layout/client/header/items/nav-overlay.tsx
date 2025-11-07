"use client";
import React from "react";
import CancelIC from "@/assets/svg/cancel";
import InfoCard from "../../../../../section/client/sidebar/info-box";
import { ActionArea, NavList, NavOverlay } from "../styled";
import NavItems from "./nav-items";
import { CateProps } from "./desktop-nav";
import { Divider } from "@/app/screens/client/faq/styled";

interface Props {
  cate: CateProps[];
  pathname: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  handleSearchByCate: (id: string) => void;
  onClose: () => void;
  onSearch: () => void;
  onToDetail: () => void;
}

const NavOverlayMenu: React.FC<Props> = ({
  cate,
  pathname,
  open,
  setOpen,
  handleSearchByCate,
  onClose,
  onSearch,
  onToDetail,
}) => {
  return (
    <NavOverlay>
      <ActionArea>
        <button onClick={onClose}>
          <CancelIC />
        </button>
      </ActionArea>
      <button className="p-0 m-0 w-full" onClick={onToDetail}>
        <InfoCard isNavbar={true} isDetails={false} />
      </button>
      <NavList $isVertical={true}>
        <Divider $color="rgba(255,255,255,0.5)" />
        <NavItems
          pathname={pathname}
          cate={cate}
          open={open}
          setOpen={setOpen}
          onNavPhoneClose={onClose}
          handleSearchByCate={handleSearchByCate}
          isRelative={true}
          onSearch={onSearch}
        />
      </NavList>
    </NavOverlay>
  );
};

export default NavOverlayMenu;
