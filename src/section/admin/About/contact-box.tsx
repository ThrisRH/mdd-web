import {
  BorderContainer,
  FlexContainer,
} from "@/styles/components/layout/Common.styles";
import React from "react";
import { BodyContainer, IconContainer } from "../styles/Page.styles";

import DeleteIC from "@/assets/svg/interact/recycle-bin";
import DropdownIC from "@/assets/svg/arrow-down";
import BlogContentInput from "../Blogs/CreateInputs/BlogContentInput";
import { Row } from "@/styles/common";
import { AboutState } from "@/types/about";
import { Text } from "@/styles/theme/temp-typo";
import DropdownInput from "../Blogs/CreateInputs/DropdownInput";

export interface AboutPageSectionProps {
  data: AboutState;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  selectedDeleteItems: number[];
  toggleSelect: (id: number) => void;
  setData: React.Dispatch<React.SetStateAction<AboutState>>;
}
const ContactBox = ({
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
          key={index}
          $bgColor={
            selectedDeleteItems.includes(item.id) ? "#eda3a3a2" : "transparent"
          }
        >
          <Row
            onClick={() => {
              if (selected === index) {
                setSelected(null);
              } else {
                setSelected(index);
              }
            }}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <FlexContainer $flexDirection="row">
              <IconContainer $haveBg={true}>
                <FlexContainer
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
                <Text $variant="body2">{item.platform}</Text>
              </FlexContainer>
            </FlexContainer>

            <IconContainer onClick={() => toggleSelect(item.id)}>
              <DeleteIC scale={20} stroke="#233238" />
            </IconContainer>
          </Row>

          {selected === index && (
            <Row>
              <DropdownInput
                label="Nền tảng"
                value={item.platform}
                onChange={(v: string) =>
                  setData((prev) => ({
                    ...prev,
                    author: {
                      ...prev.author,
                      contact: prev.author.contact.map((q, i) =>
                        i === index ? { ...q, platform: v } : q,
                      ),
                    },
                  }))
                }
              />

              <BlogContentInput
                label={"Đường dẫn"}
                value={item.url}
                onChange={(v: string) =>
                  setData((prev) => ({
                    ...prev,
                    author: {
                      ...prev.author,
                      contact: prev.author.contact.map((q, i) =>
                        i === index ? { ...q, url: v } : q,
                      ),
                    },
                  }))
                }
                maxLength={100}
              />
            </Row>
          )}
        </BorderContainer>
      ))}
    </BodyContainer>
  );
};

export default ContactBox;
