"use client";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import React, { useEffect, useState } from "react";

import {
  ActionContainer,
  BodyContainer,
  ContentSideContainer,
  ProfileSideContainer,
} from "../styles/Page.styles";
import { useToggleSelect } from "@/hooks/useToggleSelect";
import ContactSection from "./ContactSection";
import CustomEditor from "../Blogs/CreateInputs/CKEditorInput/CustomEditor";
import { ButtonWrapper, CustomButton } from "@/components/ui/button/styled";
import ProfileSection from "./ProfileSection";
import BlogContentInput from "../Blogs/CreateInputs/BlogContentInput";
import { AboutState } from "@/types/about";
import { Loader } from "../../Loading.styles";
import { Row } from "@/components/ui/common/styled";
import { Caption, Text } from "@/styles/theme/typography";

interface Props {
  about: AboutState;
}

const AboutBody = ({ about }: Props) => {
  const [data, setData] = useState(about);
  const [testData, setTestData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { selectedDeleteItems, toggleSelect } = useToggleSelect();
  const [selected, setSelected] = useState<number | null>(null);
  const [isChanged, setIsChanged] = useState(false);

  const handleUpdateAbout = async () => {
    try {
      setIsSaving(true);

      let avatarId = data.author.avatar?.id;

      const afterUpdatedData = data.author.contact.filter(
        (item) => !selectedDeleteItems.includes(item.id)
      );

      if (data.avatarFileTemp) {
        console.log("have data temp");
        const formData = new FormData();
        formData.append("files", data.avatarFileTemp);

        const uploadRes = await fetch("/mmdblogsapi/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          throw new Error("Lỗi khi upload ảnh");
        }
        const uploadJson = await uploadRes.json();
        console.log("Upload response:", uploadJson);

        avatarId = uploadJson[0].id;
      }

      const response = await fetch(
        "/mmdblogsapi/authors/iy05sicekg9wxcfsmy3oxfzl?populate=*",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              avatar: avatarId,
              contact: afterUpdatedData.map((item) => ({
                url: item.url,
              })),
            },
          }),
        }
      );
      const result = await response.json();
      console.log("Step2: ", result);
      if (!response.ok) {
        setIsLoading(false);
        console.log(result.error);
        return;
      }

      console.log("Step2: Avatar Id -> ", avatarId);
      console.log("Step2: Upload new about");

      setTimeout(() => {
        window.location.href = "/admin-panel/myaboutinfo";
        setIsSaving(false);
      }, 1000);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const addAboutContact = () => {
    setData((prev) => ({
      ...prev,
      author: {
        ...prev.author,
        contact: [
          ...(prev.author.contact || []),
          {
            id: Math.random(),
            url: "Nhập nội dung mới",
            platform: "Thêm 1 nền tảng mới",
          },
        ],
      },
    }));
  };

  // Detect if data has changed
  useEffect(() => {
    const origindata = JSON.stringify(about);
    const current = JSON.stringify(data);

    setIsChanged(origindata !== current);
  }, [data, about]);

  return (
    <>
      <ActionContainer $visible={isChanged}>
        <FlexContainer
          $justify="space-between"
          $width="normal"
          $flexDirection="row"
          style={{ alignItems: "center" }}
        >
          <Caption $color="#fff">
            Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.
          </Caption>

          {isSaving ? (
            <ButtonWrapper
              $maxWidth={true}
              onClick={() => handleUpdateAbout()}
              $variant="shadow"
              $isDisable={true}
            >
              <Row $align="center" $justify="center">
                <Loader />
                <Caption $variant="body3">Đang lưu</Caption>
              </Row>
            </ButtonWrapper>
          ) : (
            <ButtonWrapper
              $maxWidth={true}
              onClick={() => handleUpdateAbout()}
              $variant="shadow"
            >
              Lưu thay đổi
            </ButtonWrapper>
          )}
        </FlexContainer>
      </ActionContainer>
      <BodyContainer $isPadding={true} $flexDirection="row">
        <ContentSideContainer>
          <ProfileSection
            data={data}
            selected={selected}
            setSelected={setSelected}
            selectedDeleteItems={selectedDeleteItems}
            toggleSelect={toggleSelect}
            setData={setData}
          />
          {/* For editing contact info (social media, etc..)  */}
          <Text $variant="body0">Thông tin liên hệ</Text>
          <ContactSection
            data={data}
            setData={setData}
            selected={selected}
            setSelected={setSelected}
            selectedDeleteItems={selectedDeleteItems}
            toggleSelect={toggleSelect}
          />
          <BlogContentInput
            label="Nền tảng"
            value={testData}
            maxLength={1000}
            onChange={(value: string) => setTestData(value)}
          />
          {/* Add button */}
          <CustomButton
            $bgColor="transparent"
            $border="1px solid rgba(0,0,0,0.2)"
            onClick={() => addAboutContact()}
          >
            Thêm liên hệ mới
          </CustomButton>

          <Text $variant="body0">Mô tả về bản thân</Text>
          <CustomEditor
            value={data.aboutContent}
            onChange={(e) => setData((prev) => ({ ...prev, aboutContent: e }))}
            maxLength={10000}
          />
        </ContentSideContainer>
        <ProfileSideContainer>
          <ProfileSection
            data={data}
            selected={selected}
            setSelected={setSelected}
            selectedDeleteItems={selectedDeleteItems}
            toggleSelect={toggleSelect}
            setData={setData}
          />
        </ProfileSideContainer>
      </BodyContainer>
    </>
  );
};

export default AboutBody;
