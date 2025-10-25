"use client";
import React, { useEffect, useState } from "react";
import {
  AvatarWrapper,
  Biography,
  Container,
  DetailsWrapper,
  Field,
  InfoWrapper,
} from "./InfoCard.styles";
import Image from "next/image";

import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import IGIC from "@/assets/svg/ig";
import LinkedinIC from "@/assets/svg/linkedin";
import Link from "next/link";
import { useInfo } from "@/context/InfoContext";
import { Caption, Text } from "@/styles/theme/typography";

interface InfoProps {
  fullname: string;
  biography: string;
  contact: ContactProps[];
  interest: InterestProps[];
  avatar: AvatarProps;
}

interface ContactProps {
  id: number;
  platform: string;
  url: string;
}

interface InterestProps {
  id: number;
  interest: string;
}

interface AvatarProps {
  id: string;
  url: string;
  name: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

interface InfoCardProps {
  isNavbar: boolean;
  isDetails: boolean;
  textColor?: string;
}

const InfoCard = ({ isNavbar, textColor, isDetails }: InfoCardProps) => {
  const { info, loading } = useInfo();

  if (!info) return <p>Loading...</p>;

  return (
    <>
      {info?.map((item, index) => (
        <Container $isNavbar={isNavbar} key={index}>
          <AvatarWrapper>
            <Image
              className=" rounded-full"
              src={
                item.avatar.url.startsWith("https")
                  ? item.avatar.url
                  : `/baseurl${item.avatar.url}`
              }
              alt="image"
              style={{ objectFit: "cover" }}
              fill
            />
          </AvatarWrapper>

          <InfoWrapper>
            <Text $variant="h2" $color={textColor}>
              my {item.fullname} diary
            </Text>
            <Field $isNavbar={isNavbar}>
              {item.interest.map((item, index) => (
                <Caption $color={textColor} key={index}>
                  {item.interest}
                </Caption>
              ))}
            </Field>
          </InfoWrapper>
          <DetailsWrapper $isDetails={isDetails}>
            <Biography>
              <Caption style={{ textAlign: "center" }}>
                {item.biography}
              </Caption>
            </Biography>
            <Field $gap={16}>
              {item.contact.map((item, index) => (
                <Link href={item.url} key={index}>
                  {item.platform === "facebook" ? (
                    <FacebookIC />
                  ) : item.platform == "instagram" ? (
                    <IGIC />
                  ) : item.platform === "x" ? (
                    <TwitterIC />
                  ) : (
                    <LinkedinIC />
                  )}
                </Link>
              ))}
            </Field>
          </DetailsWrapper>
        </Container>
      ))}
    </>
  );
};

export default InfoCard;
