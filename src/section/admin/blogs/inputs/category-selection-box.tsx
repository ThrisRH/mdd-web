import React, { useEffect, useState } from "react";

import { ButtonContainer, FormFooter } from "../../styles/Page.styles";
import { CateProps } from "@/component/layout/client/header/items/desktop-nav";

import DropdownIC from "@/assets/svg/arrow-down";
import MainButton from "@/component/button/main-button";
import { HOST } from "@/config/host-env";
import {
  CateListContainer,
  FlexInputContainer,
  Label,
  LabelContainer,
  SelectionBoxContainer,
  SelectionTitleWrapper,
  SelectionWrapper,
} from "./styled";

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
        const res = await fetch(`${HOST}/api/cates`, {
          cache: "no-store",
        });
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
        <p className="body-1">Chọn danh mục cho bài viết</p>
        <Label className="body-3">
          Thêm video của bạn vào danh sách phát để sắp xếp nội dung cho người
          xem.
        </Label>
      </LabelContainer>
      <FlexInputContainer
        $haveHover={true}
        onClick={() => setIsCateSelectionOpen(true)}
      >
        {cateSelectedName !== "" ? (
          <Label className="body-3">{cateSelectedName}</Label>
        ) : (
          <Label className="body-3">Chọn danh mục</Label>
        )}
        <DropdownIC fill={"#000"} />
      </FlexInputContainer>
      {isCateSelectionOpen && (
        <SelectionBoxContainer>
          <SelectionTitleWrapper>
            <p className="body-1">Danh sách danh mục của bạn</p>
          </SelectionTitleWrapper>
          <CateListContainer>
            {data === null ? (
              <p className="body-1">Bạn chưa có danh mục nào</p>
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
                  <p className="body-3">{item.tile}</p>
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
