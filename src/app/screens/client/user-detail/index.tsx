"use client";
import SendContent from "@/section/client/sidebar/send-content-box";
import InfoCard from "@/section/client/sidebar/info-box";
import Topic from "@/section/client/sidebar/topic-box";
import Image from "next/image";
import React from "react";
import IgImage from "@/assets/image/ig_pic.png";
import FavoriteField from "@/section/client/sidebar/favorite-box";
import { Container } from "./styled";

const UserDetailScreen = () => {
  return (
    <Container>
      <InfoCard textColor="#000" isNavbar={false} isDetails={true} />
      <Topic />
      <SendContent />
      <FavoriteField />
      <Image src={IgImage} alt="Ig Image" width={322} height={322} />
    </Container>
  );
};

export default UserDetailScreen;
