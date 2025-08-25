"use client";
import React, { useEffect, useState } from "react";
import { Container, Field } from "./InfoCard.styles";
import { H2 } from "@/components/Typography/Heading.styles";
import { Body3 } from "@/components/Typography/Body.styles";
import Image from "next/image";

import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import IGIC from "@/assets/svg/ig";
import LinkedinIC from "@/assets/svg/linkedin";
import TextDecor from "@/assets/svg/textArea";
import Link from "next/link";
import { useInfo } from "@/context/InfoContext";

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
          <div className="relative sm:w-[220px] w-[80px] sm:h-[220px] h-[80px]">
            <Image
              className=" rounded-full"
              src={`http://localhost:1337${item.avatar.url}`}
              alt="image"
              objectFit="cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <H2 $color={textColor}>my {item.fullname} diary</H2>
            <Field $isNavbar={isNavbar}>
              {item.interest.map((item, index) => (
                <Body3 $color={textColor} key={index}>
                  {item.interest}
                </Body3>
              ))}
            </Field>
          </div>
          <div
            className={`${
              isDetails ? "flex" : "hidden"
            } sm:flex flex-col gap-[16px] items-center`}
          >
            {/* <div className="h-1.5"></div> */}
            <div className="max-w-[322px]">
              <Body3 $color="#000" $align="center">
                {item.biography}
              </Body3>
            </div>
            <Field $gap={16}>
              {item.contact.map((item, index) => (
                <Link href={item.url} key={index}>
                  {item.platform === "fb" ? (
                    <FacebookIC />
                  ) : item.platform == "ig" ? (
                    <IGIC />
                  ) : item.platform === "x" ? (
                    <TwitterIC />
                  ) : (
                    <LinkedinIC />
                  )}
                </Link>
              ))}
            </Field>
          </div>
        </Container>
      ))}
    </>
  );
};

export default InfoCard;
