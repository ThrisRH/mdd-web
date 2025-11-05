"use client";
import React from "react";
import {
  AvatarWrapper,
  Biography,
  Container,
  DetailsWrapper,
  Field,
  InfoWrapper,
} from "./styled";
import Image from "next/image";
import Link from "next/link";
import { Caption, Text } from "@/styles/theme/typography";
import { useAppSelector } from "@/redux/hook";
import { getSocialMediaIcon } from "@/utils/GetSocialMediaIcon";
import Loading from "@/app/(user)/loading";

interface InfoCardProps {
  isNavbar: boolean;
  isDetails: boolean;
  textColor?: string;
}

const InfoCard = ({ isNavbar, textColor, isDetails }: InfoCardProps) => {
  const authorMDD = useAppSelector((state) => state.mainBlogAuthor);
  const info = authorMDD.data;
  if (info[0].documentId === "") return <Loading />;

  return (
    <>
      {info.map((item, index) => (
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
                  {getSocialMediaIcon(item.platform)}
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
