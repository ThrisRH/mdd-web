"use client";
import React, { useEffect, useState } from "react";
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

interface AboutContent {
  type: string;
  children: { type: string; text: string }[];
}

interface AboutResponse {
  id: number;
  authorAvt: AuthorAvt;
  aboutContent: AboutContent[];
  contact: ContactProps[];
}

interface AuthorAvt {
  url: string;
}

interface ContactProps {
  content: string;
}

const Page = () => {
  const [about, setAbout] = useState<AboutResponse | null>(null);

  const handleGetAbout = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/about?populate=*",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setAbout(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAbout();
  }, []);

  if (!about) return null;
  return (
    <AboutWrapper>
      <Card>
        <AvatarWrapper>
          <Image
            className="rounded-full"
            src={`http://localhost:1337${about.authorAvt.url}`}
            alt="avt "
            fill
          />
        </AvatarWrapper>
        <AboutText width={"100%"} />
        <Content>
          {about.aboutContent?.map((block, i) => (
            <Body2 key={i}>
              {block.children.map((child, j) => child.text).join("")}
            </Body2>
          ))}
        </Content>

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
};

export default Page;
