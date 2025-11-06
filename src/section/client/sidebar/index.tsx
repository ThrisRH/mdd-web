import React from "react";
import Topic from "./topic-box";
import SendContent from "./send-content-box";
import Image from "next/image";
import InfoCard from "./info-box";
import FavoriteField from "./favorite-box";
import IgImage from "@/assets/image/ig_pic.png";
import { SideBarWrapper } from "./styled";

const Sidebar = () => {
  return (
    <SideBarWrapper>
      <InfoCard isDetails={false} isNavbar={false} />
      <Topic />
      <FavoriteField />
      <SendContent />
      <Image src={IgImage} alt="Ig Image" width={322} height={322} />
    </SideBarWrapper>
  );
};

export default Sidebar;
