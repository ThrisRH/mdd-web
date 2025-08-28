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
import PageContainer from "@/components/Main/PageContainer";
import NotFound from "@/components/Main/NotFound";

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

// Lấy dữ liệu từ Serverside
const API_URL = process.env.SERVER_HOST;

async function getAboutData() {
  try {
    const res = await fetch(`${API_URL}/api/about?populate=*`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fecth about data");
  }
}

export default async function AboutPage() {
  const data = await getAboutData();
  const about: AboutResponse = data.data;
  console.log(about);

  if (!about)
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  return (
    <AboutWrapper>
      <Card>
        <AvatarWrapper>
          <Image
            className="rounded-full"
            src={`/baseurl${about.authorAvt.url}`}
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
}
