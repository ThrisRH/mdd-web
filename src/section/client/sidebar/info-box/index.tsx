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
import { useAppSelector } from "@/redux/hook";
import { getSocialMediaIcon } from "@/utils/get-social-media-icon";
import Loading from "@/app/(user)/loading";

interface InfoCardProps {
  isNavbar: boolean;
  isDetails: boolean;
  textColor?: string;
}

const InfoCard = ({ isNavbar, isDetails }: InfoCardProps) => {
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
            <h2>my {item.fullname} diary</h2>
            <Field $isNavbar={isNavbar}>
              {item.interest.map((i, index) => (
                <p className="body-3" key={index}>
                  {" "}
                  {i.interest}
                  {index === item.interest.length - 1 ? "" : ", "}
                </p>
              ))}
            </Field>
          </InfoWrapper>
          <DetailsWrapper $isDetails={isDetails}>
            <Biography>
              <p className="body-3">{item.biography}</p>
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
