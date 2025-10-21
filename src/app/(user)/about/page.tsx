import React from "react";
import AboutText from "@/assets/svg/textArea";
import Image from "next/image";
import { Body1, Body2, Body3 } from "@/components/Typography/Body.styles";
import {
  AboutWrapper,
  AvatarWrapper,
  Card,
  ContactSection,
  Content,
  FooterSection,
} from "@/components/Main/Styled/AboutContent.styles";
import { H5 } from "@/components/Typography/Heading.styles";
import { notFound } from "next/navigation";
import { InfoProps } from "@/context/InfoContext";

export interface AboutResponse {
  id: number;
  aboutContent: string;
  author: InfoProps;
  contact: ContactProps[];
}

interface AuthorAvt {
  url: string;
}

interface ContactProps {
  id: number;
  content: string;
}

// Lấy dữ liệu từ Serverside
const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

async function getAboutData() {
  try {
    const res = await fetch(`${API_URL}/api/about?populate=*`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      NotFound: true,
    };
  }
}

export default async function AboutPage() {
  const data = await getAboutData();
  const about: AboutResponse | null = data.data || null;

  if (!about) notFound();
  return (
    <AboutWrapper>
      <Card>
        <AvatarWrapper>
          <Image
            className="rounded-full"
            src={`${
              about.author.avatar.url.startsWith("https")
                ? about.author.avatar.url
                : `/baseurl${about.author.avatar.url}`
            }`}
            alt="avt"
            fill
          />
        </AvatarWrapper>
        <AboutText width={"100%"} />
        {/* <Content>
          {about.aboutContent?.map((block, i) => (
            <Body2 key={i}>
              {block.children.map((child, j) => child.text).join("")}
            </Body2>
          ))}
        </Content> */}

        <ContactSection>
          <Body1>Liên hệ qua:</Body1>

          <Content $gap={1}>
            {about.contact?.map((block, i) => (
              <Body2 $color="#000" key={i}>
                {block.content}
              </Body2>
            ))}
          </Content>
        </ContactSection>

        <FooterSection>
          <H5 $color="$000" $size={15}>
            Have a nice day!
          </H5>
          <Body3 $color="#000">my MDD diary</Body3>
        </FooterSection>
      </Card>
    </AboutWrapper>
  );
}
