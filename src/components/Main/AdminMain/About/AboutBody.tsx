"use client";
import { Body, CustomBody } from "@/components/Typography/Body.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import React, { useState } from "react";

import { AboutResponse } from "@/app/(user)/about/page";
import { ActionContainer, BodyContainer } from "../styles/Page.styles";
import { useToggleSelect } from "@/hooks/useToggleSelect";
import ContactSection from "./ContactSection";
import CustomEditor from "../Blogs/CreateInputs/Editor/CustomEditor";
import { CustomButton } from "@/styles/components/buttons/Button.styles";

interface Props {
  about: AboutResponse;
}

const AboutBody = ({ about }: Props) => {
  const [data, setData] = useState(about);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { selectedDeleteItems, toggleSelect } = useToggleSelect();
  const [selected, setSelected] = useState<number | null>(null);

  const handleUpdateAbout = async () => {
    try {
      setIsSaving(true);
      const afterUpdatedData = data.contact.filter(
        (item) => !selectedDeleteItems.includes(item.id)
      );

      const response = await fetch("/mmdblogsapi/about?populate=*", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            aboutContent: data.aboutContent,
            contact: afterUpdatedData.map((item) => ({
              content: item.content,
            })),
          },
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        console.log(result.error);
        return;
      }

      setTimeout(() => {
        setIsSaving(false);
        window.location.href = "/adminpanel/myaboutinfo";
      }, 1000);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <>
      <ActionContainer $visible={true}>
        <FlexContainer
          $justify="space-between"
          $width="normal"
          $flexDirection="row"
          style={{ alignItems: "center" }}
        >
          <Body $variant="body3" $color="#fff">
            Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.
          </Body>
          <CustomButton
            $bgColor="transparent"
            $border="2px solid rgba(22, 31, 57, 0.8)"
            $width="fit"
            $hoverBgColor="transparent"
            $hoverBorder="2px solid #f1dbc4"
            onClick={() => handleUpdateAbout()}
          >
            <CustomBody $color="#fff">Lưu thay đổi</CustomBody>
          </CustomButton>
        </FlexContainer>
      </ActionContainer>
      <BodyContainer $isPadding={true}>
        <Body $variant="body0">Thông tin liên hệ</Body>
        <ContactSection
          data={data}
          index={0}
          selected={selected}
          setSelected={setSelected}
          selectedDeleteItems={selectedDeleteItems}
          toggleSelect={toggleSelect}
          setData={setData}
        />

        <Body $variant="body0">Mô tả về bản thân</Body>
        <CustomEditor
          value={data.aboutContent}
          onChange={(e) => setData((prev) => ({ ...prev, aboutContent: e }))}
          maxLength={10000}
        />
      </BodyContainer>
    </>
  );
};

export default AboutBody;
