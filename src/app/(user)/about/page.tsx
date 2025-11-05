import React from "react";
import AboutText from "@/assets/svg/textArea";
import Image from "next/image";
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
import { notFound } from "next/navigation";
import Link from "next/link";

import { About } from "@/types/about";
import { Body, Caption, Text } from "@/styles/theme/typography";
import { fetchAbout } from "@/utils/data/FetchAbout";
import { getSocialMediaIcon } from "@/utils/GetSocialMediaIcon";
import { FlexContainer } from "@/styles/components/layout/Common.styles";

export default async function AboutPage() {
  const about: About = await fetchAbout();

  if (!about) notFound();
  return (
    <AboutWrapper>
      <Card>
        <AvatarWrapper>
          <Image
            className="rounded-full"
            src={`${about.author.avatar.url.startsWith("https")
              ? about.author.avatar.url
              : `/baseurl${about.author.avatar.url}`
              }`}
            alt="avt"
            fill
          />
        </AvatarWrapper>
        <AboutText width={"100%"} />

        <FlexContainer>
          <ReactMarkDown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => (
                <Text $variant="h1" $color="#000" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <Text $variant="h2" $color="#000" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <Text $variant="h3" $color="#000" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <Text $variant="h4" $color="#000" {...props} />
              ),
              p: ({ node, ...props }) => (
                <Text $variant="body3" $color="#000" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6" {...props} />
              ),
              li: ({ node, ...props }) => (
                <Body $color="#000" className="" as={"li"} {...props} />
              ),
            }}
          >
            {about.aboutContent}
          </ReactMarkDown>
        </FlexContainer>

        <ContactSection>
          <Text $variant="body1">Liên hệ qua:</Text>

          <Content $gap={12}>
            {about.author.contact?.map((item) => (
              <Link href={item.url} key={item.id}>
                {getSocialMediaIcon(item.platform)}
              </Link>
            ))}
          </Content>
        </ContactSection>

        <FooterSection>
          <Text $variant="h5" $size={15}>
            Have a nice day!
          </Text>
          <Caption>my MDD diary</Caption>
        </FooterSection>
      </Card>
    </AboutWrapper>
  );
}
