"use client";
import React, { useState } from "react";
import { ActionContainer } from "../styles/Page.styles";
import BinIC from "@/assets/svg/Interact/RecycleBin";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { Loader } from "../../Loading.styles";
import { CustomButton } from "@/components/ui/button/styled";
import IconButton from "@/components/ui/button/icon_button";
import { Body, Text } from "@/styles/theme/typography";

interface Props {
  selectedItems: Set<string>;
  forFeature: "blogs" | "cates";
}

const ActionSection = ({ selectedItems, forFeature }: Props) => {
  const [hover, setHover] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleDeleteBlog = async () => {
    setIsDeleting(true);
    try {
      for (const id of selectedItems) {
        const response = await fetch(`/mmdblogsapi/${forFeature}/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete document.");
        }
      }
      setTimeout(
        () =>
          (window.location.href =
            forFeature === "blogs"
              ? "/admin-panel/myblogs"
              : "/admin-panel/mycates"),
        1000
      );
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsDeleting(false), 1000);
    }
  };

  return (
    <ActionContainer $visible={selectedItems.size !== 0}>
      <Text $variant="body3" $color="#fff">
        Đã chọn: {selectedItems.size}
      </Text>
      <FlexContainer $width="fit" $flexDirection="row">
        {/* Nút xóa hoặc hủy thao tác */}
        {!isDeleteMode ? (
          <IconButton
            icon={<BinIC scale={16} stroke={"#000"} />}
            variant="shadow"
            onClick={() => setIsDeleteMode(true)}
          >
            Xóa
          </IconButton>
        ) : (
          <CustomButton
            $bgColor="transparent"
            $border="2px solid rgba(22, 31, 57, 0.8)"
            $width="fit"
            $hoverBgColor="transparent"
            $hoverBorder="2px solid #f1dbc4"
            onClick={() => setIsDeleteMode(false)}
          >
            <BinIC />
            <Body $color="#fff">Hủy</Body>
          </CustomButton>
        )}

        {/* Bước confirm */}
        {isDeleteMode && !isDeleting && (
          <CustomButton
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            $bgColor="#ff0000"
            $width="200px"
            $hoverBgColor="#f45c5c"
            onClick={() => handleDeleteBlog()}
          >
            {!hover ? (
              <Body $color="#fff">Bạn chắc chắn chứ?</Body>
            ) : (
              <Body $color="#fff" $weight={600}>
                Chắc chắn!
              </Body>
            )}
          </CustomButton>
        )}

        {isDeleting && (
          <CustomButton
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            $bgColor="#aeaeae"
            $width="200px"
            $hoverBgColor="#f45c5c"
          >
            <Loader />
            <Body $color="#fff" $weight={600}>
              Đang xóa
            </Body>
          </CustomButton>
        )}
      </FlexContainer>
    </ActionContainer>
  );
};

export default ActionSection;
