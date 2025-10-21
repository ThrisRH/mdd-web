import { Body, CustomBody } from "@/components/Typography/Body.styles";
import {
  BorderContainer,
  ContentEditingWrapper,
  FlexContainer,
} from "@/styles/components/layout/Common.styles";
import React from "react";
import { BodyContainer, IconContainer } from "../styles/Page.styles";
import { AboutResponse } from "@/app/(user)/about/page";

import DeleteIC from "@/assets/svg/Interact/RecycleBin";
import DropdownIC from "@/assets/svg/arrowdown";
import BlogContentInput from "../Blogs/CreateInputs/BlogContentInput";

export interface AboutPageSectionProps {
  data: AboutResponse;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  selectedDeleteItems: number[];
  toggleSelect: (id: number) => void;
  setData: React.Dispatch<React.SetStateAction<AboutResponse>>;
}
const ContactSection = ({
  data,
  setData,
  selectedDeleteItems,
  selected,
  setSelected,
  toggleSelect,
}: AboutPageSectionProps) => {
  return (
    /* Danh sách các thông tin liên hệ */
    <BodyContainer>
      {data.author.contact.map((item, index) => (
        <BorderContainer
          $canSelection={true}
          key={index}
          $bgColor={
            selectedDeleteItems.includes(item.id) ? "#eda3a3a2" : "transparent"
          }
        >
          <FlexContainer $flexDirection="row" style={{ cursor: "pointer" }}>
            <FlexContainer $flexDirection="row">
              <IconContainer $haveBg={true}>
                <FlexContainer
                  onClick={() => {
                    if (selected === index) {
                      setSelected(null);
                    } else {
                      setSelected(index);
                    }
                  }}
                  style={{
                    transform: `${
                      selected === index ? "rotate(180deg)" : "rotate(0deg)"
                    }`,
                  }}
                >
                  <DropdownIC fill="#233238" />
                </FlexContainer>
              </IconContainer>
              <FlexContainer style={{ justifyContent: "center" }}>
                <Body $variant="body2">{item.url}</Body>
              </FlexContainer>
            </FlexContainer>

            <IconContainer onClick={() => toggleSelect(item.id)}>
              <DeleteIC scale={20} stroke="#233238" />
            </IconContainer>
          </FlexContainer>
          <ContentEditingWrapper
            $isVisible={selected !== index}
            $flexDirection="row"
          >
            <BlogContentInput
              label="Thông tin liên hệ"
              value={item.url}
              maxLength={1000}
              onChange={(value: string) => {
                setData((prev) => ({
                  ...prev,
                  contact: prev.contact.map((q, i) =>
                    i === index ? { ...q, question: value } : q
                  ),
                }));
              }}
            />
          </ContentEditingWrapper>
        </BorderContainer>
      ))}
    </BodyContainer>
  );
};

export default ContactSection;
