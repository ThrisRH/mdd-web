import React, { useEffect, useState } from "react";
import {
  CateListContainer,
  FlexInputContainer,
  LabelContainer,
  SelectionBoxContainer,
  SelectionTitleWrapper,
  SelectionWrapper,
} from "../../../../../styles/components/inputs/Input.styles";
import { ButtonContainer, FormFooter } from "../../styles/Page.styles";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";

import DropdownIC from "@/assets/svg/arrowdown";
import MainButton from "@/components/ui/button/main_button";
import { Body, Caption, Text } from "@/styles/theme/typography";
import { HOST } from "@/app/(admin)/config/constant";

interface CateSelectionProps {
  cateSelectedId: string;
  cateSelectedName: string;
  setSelectedId: (value: string) => void;
  setSelectedName: (value: string) => void;
}

const CategorySelectionBox = ({
  cateSelectedId,
  cateSelectedName,
  setSelectedId,
  setSelectedName,
}: CateSelectionProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CateProps[] | null>(null);
  const [isCateSelectionOpen, setIsCateSelectionOpen] = useState(false);

  // Radio input

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${HOST}/api/cates`,
          {
            cache: "no-store",
          }
        );
        const result = await res.json();

        setData(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <SelectionWrapper>
      <LabelContainer $padding="none">
        <Text $variant="body0" $weight={600}>
          Chọn danh mục cho bài viết
        </Text>
        <Caption $color="#979797">
          Thêm video của bạn vào danh sách phát để sắp xếp nội dung cho người
          xem.
        </Caption>
      </LabelContainer>
      <FlexInputContainer
        $haveHover={true}
        onClick={() => setIsCateSelectionOpen(true)}
      >
        {cateSelectedName !== "" ? (
          <Caption $color="#979797">{cateSelectedName}</Caption>
        ) : (
          <Caption $color="#979797">Chọn danh mục</Caption>
        )}
        <DropdownIC fill={"#000"} />
      </FlexInputContainer>
      {isCateSelectionOpen && (
        <SelectionBoxContainer>
          <SelectionTitleWrapper>
            <Text $color="#4f4f4f" $variant="body0">
              Danh sách danh mục của bạn
            </Text>
          </SelectionTitleWrapper>
          <CateListContainer>
            {data === null ? (
              <p>Bạn chưa có danh mục nào</p>
            ) : (
              data.map((item) => (
                <FlexInputContainer
                  $haveHover={false}
                  $padding="0"
                  $border="none"
                  $width="100%"
                  $justify="flex-start"
                  $gap={12}
                  as={"label"}
                  key={item.documentId}
                >
                  <input
                    type="radio"
                    name="category"
                    value={item.documentId}
                    checked={cateSelectedId === item.documentId}
                    onChange={() => {
                      setSelectedId(item.documentId);
                      setSelectedName(item.tile);
                    }}
                  />
                  <Body>{item.tile}</Body>
                </FlexInputContainer>
              ))
            )}
          </CateListContainer>
          <FormFooter>
            <ButtonContainer>
              <MainButton
                variant="secondary"
                onClick={() => setIsCateSelectionOpen(false)}
              >
                Xong
              </MainButton>
            </ButtonContainer>
          </FormFooter>
        </SelectionBoxContainer>
      )}
    </SelectionWrapper>
  );
};

export default CategorySelectionBox;
