"use client";
import React, { useEffect, useState } from "react";

import {
  ActionContainer,
  BodyContainer,
  ContentSideContainer,
  ProfileSideContainer,
} from "../styles/Page.styles";
import { useToggleSelect } from "@/hooks/use-toggle-select";
import ContactSection from "./contact-box";
import { ButtonWrapper, CustomButton } from "@/component/button/styled";
import ProfileSection from "./profile-box";
import { AboutState } from "@/types/about";
import { Loader } from "../../client/main/loading/styled";
import { Row } from "@/styles/common";
import { handleError } from "@/utils/handle-error";
import { ActionBarText } from "@/styles/typography";
import { FlexContainer } from "@/styles/layout";
import CustomEditor from "../blogs/inputs/ck-editor-input";

interface Props {
  about: AboutState;
}

async function updateAvatar(file: File | null) {
  if (!file) return null;

  const formData = new FormData();
  formData.append("files", file);

  const res = await fetch("/mmdblogsapi/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload image failed!");
  }
  const uploadJson = await res.json();

  return uploadJson[0].id || null;
}

async function updateAuthor(avatarId: string | null, contact: any[]) {
  const res = await fetch(
    "/mmdblogsapi/authors/b9bgnwx05hy0tox20p5iosr2?populate=*",
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          avatar: avatarId,
          contact: contact.map((item) => ({
            url: item.url,
            platform: item.platform,
          })),
        },
      }),
    },
  );
  if (!res.ok) {
    throw new Error("Update author failed");
  }
  return res.json();
}

async function updateAboutContent(aboutContent: string | null) {
  if (!aboutContent) return null;
  const res = await fetch("/mmdblogsapi/about?populate=*", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        aboutContent: aboutContent,
      },
    }),
  });
  if (!res.ok) {
    throw new Error("Update author failed");
  }
  return res.json();
}

const AboutBody = ({ about }: Props) => {
  const [data, setData] = useState(about);
  const [isSaving, setIsSaving] = useState(false);
  const { selectedDeleteItems, toggleSelect } = useToggleSelect();
  const [selected, setSelected] = useState<number | null>(null);
  const [isChanged, setIsChanged] = useState(false);

  const handleUpdateAbout = async () => {
    try {
      setIsSaving(true);

      let avatarFileTemp: File = data.avatarFileTemp || null;

      const afterUpdatedData = data.author.contact.filter(
        (item) => !selectedDeleteItems.includes(item.id),
      );

      const promises = [];

      if (
        avatarFileTemp !== null ||
        JSON.stringify(afterUpdatedData) !==
          JSON.stringify(about.author.contact)
      ) {
        const avatarId =
          (await updateAvatar(avatarFileTemp)) || data.author.avatar.id;
        promises.push(updateAuthor(avatarId, afterUpdatedData));
      }

      if (data.aboutContent !== about.aboutContent) {
        promises.push(updateAboutContent(data.aboutContent));
      }

      await Promise.all(promises);

      setTimeout(() => {
        window.location.href = "/admin-panel/myaboutinfo";
        setIsSaving(false);
      }, 1000);
    } catch (error: any) {
      handleError();
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

    setIsChanged(origindata !== current || selectedDeleteItems.length !== 0);
  }, [data, about, selectedDeleteItems]);

  return (
    <>
      <ActionContainer $visible={isChanged}>
        <FlexContainer
          $justify="space-between"
          $width="normal"
          $flexDirection="row"
          style={{ alignItems: "center" }}
        >
          <ActionBarText className="body-3">
            Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.
          </ActionBarText>

          {isSaving ? (
            <ButtonWrapper
              $maxWidth={true}
              onClick={() => handleUpdateAbout()}
              $variant="shadow"
              disabled={true}
            >
              <Row $align="center" $justify="center">
                <Loader />
                <p className="body-3">Đang lưu</p>
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
          <p className="body-1">Thông tin liên hệ</p>
          {data.contact !== null ? (
            <ContactSection
              data={data}
              setData={setData}
              selected={selected}
              setSelected={setSelected}
              selectedDeleteItems={selectedDeleteItems}
              toggleSelect={toggleSelect}
            />
          ) : null}

          {/* Add button */}
          <CustomButton
            $bgColor="transparent"
            $border="1px solid rgba(0,0,0,0.2)"
            onClick={() => addAboutContact()}
          >
            Thêm liên hệ mới
          </CustomButton>

          <p className="body-1">Mô tả về bản thân</p>
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
