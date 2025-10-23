"use client";
import React, { useState } from "react";
import { ActionContainer } from "../styles/Page.styles";
import { Body, CustomBody } from "@/components/Typography/Body.styles";
import BinIC from "@/assets/svg/Interact/RecycleBin";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import { Loader } from "../../Loading.styles";
import { ButtonWrapper, CustomButton } from "@/components/ui/button/styled";
import MainButton from "@/components/ui/button/main_button";
import IconButton from "@/components/ui/button/icon_button";

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
      <CustomBody $color="#fff">Đã chọn: {selectedItems.size}</CustomBody>
      <FlexContainer $width="fit" $flexDirection="row">
        {/* Nút xóa hoặc hủy thao tác */}
        {!isDeleteMode ? (
          // <CustomButton
          //   $bgColor="transparent"
          //   $border="2px solid rgba(22, 31, 57, 0.8)"
          //   $width="fit"
          //   $hoverBgColor="transparent"
          //   $hoverBorder="2px solid #f1dbc4"
          //   onClick={() => setIsDeleteMode(true)}
          // >
          //   <BinIC />
          //   <CustomBody $color="#fff">Xóa</CustomBody>
          // </CustomButton>
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
            <CustomBody $color="#fff">Hủy</CustomBody>
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
              <CustomBody $color="#fff">Bạn chắc chắn chứ?</CustomBody>
            ) : (
              <CustomBody $color="#fff" $weight={600}>
                Chắc chắn!
              </CustomBody>
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
            <CustomBody $color="#fff" $weight={600}>
              Đang xóa
            </CustomBody>
          </CustomButton>
        )}
      </FlexContainer>
    </ActionContainer>
  );
};

export default ActionSection;
