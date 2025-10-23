import React, { useEffect, useState } from "react";
import {
  CateListContainer,
  FlexInputContainer,
  LabelContainer,
  SelectionBoxContainer,
  SelectionContainer,
  SelectionTitleWrapper,
} from "../../../../../styles/components/inputs/Input.styles";
import { ButtonContainer, FormFooter } from "../../styles/Page.styles";
import { CateProps } from "@/components/Layout/UserLayout/Header/DesktopNav";
import {
  Body,
  Body1,
  Body3,
  CustomBody,
} from "@/components/Typography/Body.styles";

import DropdownIC from "@/assets/svg/arrowdown";
import MainButton from "@/components/ui/button/main_button";

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
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/cates`,
          { cache: "no-store" }
        );
        const result = await res.json();
        console.log("result cate: ", result);
        setData(result.data);
        console.log("result cate: ", data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <SelectionContainer>
      <LabelContainer $padding="none">
        <Body1 $fontSize="18px" $weight={600}>
          Chọn danh mục cho bài viết
        </Body1>
        <Body3 $color="#979797" $size={14}>
          Thêm video của bạn vào danh sách phát để sắp xếp nội dung cho người
          xem.
        </Body3>
      </LabelContainer>
      <FlexInputContainer
        $haveHover={true}
        onClick={() => setIsCateSelectionOpen(true)}
      >
        {cateSelectedName !== "" ? (
          <Body3 $color="#979797">{cateSelectedName}</Body3>
        ) : (
          <Body3 $color="#979797">Chọn danh mục</Body3>
        )}
        <DropdownIC fill={"#000"} />
      </FlexInputContainer>
      {isCateSelectionOpen && (
        <SelectionBoxContainer>
          <SelectionTitleWrapper>
            <Body $color="#4f4f4f" $variant="body0">
              Danh sách danh mục của bạn
            </Body>
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
                  <CustomBody>{item.tile}</CustomBody>
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
    </SelectionContainer>
  );
};

export default CategorySelectionBox;
