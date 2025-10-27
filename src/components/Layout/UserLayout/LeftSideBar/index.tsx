import React from "react";
import Topic from "./Topic/Topic";
import SendContent from "./SendContent/SendContent";
import Image from "next/image";
import InfoCard from "./Info";
import FavoriteField from "./FavoriteField/FavoriteField";
import IgImage from "@/assets/image/ig_pic.png";
import { SideBarWrapper } from "@/components/Main/Styled/PageContainer.styles";
import { Blog } from "@/components/Main/PageContainer";

type SideBarProps = {
  blogs: Blog[];
};

const Sidebar = ({ blogs }: SideBarProps) => {
  return (
    <SideBarWrapper>
      <InfoCard isDetails={false} isNavbar={false} />
      <Topic />
      <FavoriteField blogs={blogs} />
      <SendContent />
      <Image src={IgImage} alt="Ig Image" width={322} height={322} />
    </SideBarWrapper>
  );
};

export default Sidebar;
