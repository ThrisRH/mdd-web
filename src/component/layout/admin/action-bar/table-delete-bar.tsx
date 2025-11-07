"use client";
import React, { useState } from "react";
import { ActionContainer } from "../../../../section/admin/styles/Page.styles";
import BinIC from "@/assets/svg/interact/recycle-bin";
import { Loader } from "../../../../section/client/main/loading/styled";
import { CustomButton } from "@/component/button/styled";
import IconButton from "@/component/button/icon-button";
import { handleError } from "@/utils/handle-error";
import { ActionBarText, WhiteText } from "@/styles/typography";
import { FlexContainer } from "@/styles/layout";

interface Props {
  selectedItems: Set<string>;
  forFeature: "blogs" | "cates";
}

const TableActionBar = ({ selectedItems, forFeature }: Props) => {
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
          return null;
        }
      }
      setTimeout(
        () =>
          (window.location.href =
            forFeature === "blogs"
              ? "/admin-panel/myblogs"
              : "/admin-panel/mycates"),
        1000,
      );
    } catch (error) {
      handleError();
    } finally {
      setTimeout(() => setIsDeleting(false), 1000);
    }
  };

  return (
    <ActionContainer $visible={selectedItems.size !== 0}>
      <ActionBarText className="body3">
        Đã chọn: {selectedItems.size}
      </ActionBarText>
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
            $bgColor="#fff"
            $border="2px solid rgba(22, 31, 57, 0.8)"
            $width="fit"
            $hoverBgColor="#ffffffeb"
            $hoverBorder="2px solid #f1dbc4"
            onClick={() => setIsDeleteMode(false)}
          >
            <BinIC />
            <p className="body-2">Hủy</p>
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
              <WhiteText>Bạn chắc chắn chứ?</WhiteText>
            ) : (
              <WhiteText className="body-1">Chắc chắn!</WhiteText>
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
            <WhiteText className="body-1">Đang xóa</WhiteText>
          </CustomButton>
        )}
      </FlexContainer>
    </ActionContainer>
  );
};

export default TableActionBar;
