"use client";
import React, { useState } from "react";
import { ActionContainer } from "../styles/Page.styles";
import { CustomBody } from "@/components/Typography/Body.styles";
import { CustomButton } from "@/components/Button/Button.styles";
import BinIC from "@/assets/svg/Interact/RecycleBin";
import { FlexContainer } from "@/components/Layout/Common/Container.styles";
import { Loader } from "../../Loading.styles";

interface Props {
  selectedBlogs: Set<string>;
}

const ActionSection = ({ selectedBlogs }: Props) => {
  const [hover, setHover] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleDeleteBlog = async () => {
    setIsDeleting(true);
    try {
      for (const id of selectedBlogs) {
        const response = await fetch(`/mmdblogsapi/blogs/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete document.");
        }
      }
      setTimeout(() => (window.location.href = "/myblogs"), 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsDeleting(false), 1000);
    }
  };

  return (
    <ActionContainer $visible={selectedBlogs.size !== 0}>
      <CustomBody $color="#fff">Đã chọn: {selectedBlogs.size}</CustomBody>
      <FlexContainer $flexDirection="row" $gap={12}>
        {/* Nút xóa hoặc hủy thao tác */}
        {!isDeleteMode ? (
          <CustomButton
            $bgColor="transparent"
            $border="2px solid rgba(22, 31, 57, 0.8)"
            $width="fit"
            $hoverBgColor="transparent"
            $hoverBorder="2px solid #f1dbc4"
            onClick={() => setIsDeleteMode(true)}
          >
            <BinIC />
            <CustomBody $color="#fff">Xóa</CustomBody>
          </CustomButton>
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
