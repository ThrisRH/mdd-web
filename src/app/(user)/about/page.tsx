import React from "react";
import AboutText from "@/assets/svg/textArea";
import Image from "next/image";
import { Body, Body1, Body3 } from "@/components/Typography/Body.styles";
import rehypeRaw from "rehype-raw";
import ReactMarkDown from "react-markdown";
import {
  AboutWrapper,
  AvatarWrapper,
  Card,
  ContactSection,
  Content,
  FooterSection,
} from "@/components/Main/Styled/AboutContent.styles";
import { H1, H2, H3, H4, H5 } from "@/components/Typography/Heading.styles";
import { notFound } from "next/navigation";
import { InfoProps } from "@/context/InfoContext";
import Link from "next/link";

import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import IGIC from "@/assets/svg/ig";
import LinkedinIC from "@/assets/svg/linkedin";
import { About } from "@/types/about";

// Lấy dữ liệu từ Serverside
const API_URL = process.env.NEXT_PUBLIC_SERVER_HOST;

async function getAboutData() {
  try {
    const res = await fetch(
      `${API_URL}/api/about?populate[author][populate]=avatar&populate[author][populate]=contact`,
      {
        method: "GET",
      }
    );
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
  const about: About | null = data.data || null;

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

        <ReactMarkDown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => <H1 $color="#000" {...props} />,
            h2: ({ node, ...props }) => <H2 $color="#000" {...props} />,
            h3: ({ node, ...props }) => <H3 {...props} />,
            h4: ({ node, ...props }) => <H4 {...props} />,
            p: ({ node, ...props }) => <Body $color="#000" {...props} />,
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6" {...props} />
            ),
            li: ({ node, ...props }) => (
              <Body $color="#000" className="" as={"li"} {...props} />
            ),
            // strong: ({ node, ...props }) => (
            //   <CustomBody $whiteSpace="normal" $color="#000" $weight={600} />
            // ),
            // em: ({ node, ...props }) => (
            //   <CustomBody $whiteSpace="normal" $color="#000" $weight={400} />
            // ),
          }}
        >
          {about.aboutContent}
        </ReactMarkDown>

        <ContactSection>
          <Body1>Liên hệ qua:</Body1>

          <Content $gap={12}>
            {about.author.contact?.map((item) => (
              <Link href={item.url} key={item.id}>
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
