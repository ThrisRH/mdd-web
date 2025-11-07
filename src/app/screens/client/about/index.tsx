"use client";
import React from "react";
import {
  AboutWrapper,
  AvatarWrapper,
  Card,
  ContactSection,
  Content,
  FooterSection,
} from "./styled";
import AboutText from "@/assets/svg/text-area";
import ReactMarkDown from "react-markdown";
import Image from "next/image";
import rehypeRaw from "rehype-raw";
import { About } from "@/types/about";
import Link from "next/link";
import { getSocialMediaIcon } from "@/utils/get-social-media-icon";
import { FlexContainer } from "@/styles/layout";

type Props = {
  about: About;
};

const AboutScreen = ({ about }: Props) => {
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

        <FlexContainer>
          <ReactMarkDown
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => <h1 {...props} />,
              h2: ({ node, ...props }) => <h2 {...props} />,
              h3: ({ node, ...props }) => <h3 {...props} />,
              h4: ({ node, ...props }) => <h4 {...props} />,
              p: ({ node, ...props }) => <p className="body-3" {...props} />,
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6" {...props} />
              ),
              li: ({ node, ...props }) => <li {...props} />,
            }}
          >
            {about.aboutContent}
          </ReactMarkDown>
        </FlexContainer>

        <ContactSection>
          <p className="body-1">Liên hệ qua:</p>

          <Content $gap={12}>
            {about.author.contact.map((item) => (
              <Link href={item.url} key={item.id}>
                {getSocialMediaIcon(item.platform)}
              </Link>
            ))}
          </Content>
        </ContactSection>

        <FooterSection>
          <h4>Have a nice day!</h4>
          <p className="body-2">my MDD diary</p>
        </FooterSection>
      </Card>
    </AboutWrapper>
  );
};

export default AboutScreen;
