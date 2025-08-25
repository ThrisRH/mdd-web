"use client";
import React, { useEffect, useState } from "react";
import AboutText from "@/assets/svg/textArea";
import Image from "next/image";
import { Body1 } from "@/components/Typography/Body.styles";

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
    <div className="px-4 py-22 lg:p-48 md:p-28 flex items-center justify-center lg:mt-0 mt-10">
      <div
        className="relative flex flex-col w-[1058px] h-fit pt-40 rounded-[40px] pb-10 px-10 items-center gap-6"
        style={{ backgroundColor: "rgba(241, 219, 196, 0.3)" }}
      >
        <div className="w-[172px] lg:w-[280px] h-[172px] lg:h-[280px] absolute lg:top-[-150px] top-[-100px]">
          <Image
            className="rounded-full"
            src={`http://localhost:1337${about.authorAvt.url}`}
            alt="avt "
            fill
          />
        </div>
        <AboutText width={"100%"} />
        <div>
          {about.aboutContent?.map((block, i) => (
            <p key={i} className="mb-4 text-start">
              {block.children.map((child, j) => child.text).join("")}
            </p>
          ))}
        </div>

        <div className="w-full flex flex-col gap-1">
          <Body1>Liên hệ qua:</Body1>

          {about.contact?.map((block, i) => (
            <p key={i} className="text-start">
              {block.content}
            </p>
          ))}
        </div>

        <div className="w-full">
          <Body1>Have a nice day!</Body1>
        </div>
      </div>
    </div>
  );
};

export default Page;
