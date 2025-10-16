"use client";
import { FAQProps } from "@/app/(user)/FAQ/page";
import { CustomBody } from "@/components/Typography/Body.styles";
import { FlexContainer } from "@/styles/components/layout/Common.styles";
import React, { useState } from "react";

import DeleteIC from "@/assets/svg/Interact/RecycleBin";
import DropdownIC from "@/assets/svg/arrowdown";
import BlogTitleInput from "../Blogs/CreateInputs/BlogTitleInput";
import BlogContentInput from "../Blogs/CreateInputs/BlogContentInput";
import {
  CustomButton,
  MainButtonContainer,
} from "@/styles/components/buttons/Button.styles";
import { Loader } from "../../Loading.styles";
import { useRouter } from "next/navigation";
import { AboutResponse } from "@/app/(user)/about/page";

interface Props {
  about: AboutResponse;
}

const AboutBody = ({ about }: Props) => {
  const [data, setData] = useState(about);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  const handleUpdateFAQ = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/mmdblogsapi/faq?populate=*", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {},
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        setIsLoading(false);
        console.log(result.error);
        return;
      }

      setTimeout(() => {
        setIsLoading(false);
        window.location.href = "/adminpanel/myfaqsetting";
      }, 1000);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    // <FlexContainer $width="100%" $flexDirection="row" $gap={24} $padding="32px">
    //   {/* Danh sách các FAQs */}
    //   <FlexContainer
    //     $canOverflow={true}
    //     $width="70%"
    //     $align="center"
    //     $justify="flex-start"
    //     $gap={2}
    //   >
    //     <FlexContainer $width="100%" $gap={24}>
    //       <CustomBody $weight={600}>Thông tin liên hệ</CustomBody>
    //       <FlexContainer>
    //         {data.contact.map((item, index) => (
    //           <FlexContainer
    //             key={index}
    //             $width="100%"
    //             $border="solid rgba(0,0,0,0.2)"
    //           >
    //             <FlexContainer
    //               $flexDirection="row"
    //               $width="100%"
    //               $padding="12px"
    //               $align="center"
    //               $justify="space-between"
    //               style={{ cursor: "pointer" }}
    //             >
    //               <FlexContainer
    //                 $flexDirection="row"
    //                 $gap={12}
    //                 $align="center"
    //                 $width="95%"
    //               >
    //                 <FlexContainer $width="5%">
    //                   <FlexContainer
    //                     onClick={() => {
    //                       if (selected === index) {
    //                         setSelected(null);
    //                       } else {
    //                         setSelected(index);
    //                       }
    //                     }}
    //                     $radius={100}
    //                     $bgColor="#F4F4F4"
    //                     $width="fit-content"
    //                     $height="fit-content"
    //                     $padding="6px"
    //                     style={{
    //                       transform: `${
    //                         selected === index
    //                           ? "rotate(180deg)"
    //                           : "rotate(0deg)"
    //                       }`,
    //                     }}
    //                   >
    //                     <DropdownIC fill="#233238" />
    //                   </FlexContainer>
    //                 </FlexContainer>
    //                 <FlexContainer $width="95%">
    //                   <CustomBody>{item.content}</CustomBody>
    //                 </FlexContainer>
    //               </FlexContainer>

    //               <CustomButton
    //                 $width="fit-content"
    //                 $height="fit-content"
    //                 $bgColor="#fff"
    //                 $hoverBgColor="#e3e3e3"
    //                 // onClick={() => toggleSelect(item.id)}
    //               >
    //                 <DeleteIC scale={16} stroke="#233238" />
    //               </CustomButton>
    //             </FlexContainer>
    //             {selected === index && (
    //               <FlexContainer
    //                 $border="solid rgba(0,0,0,0.2)"
    //                 $padding="12px"
    //                 $borderWidth="1px 0px 0px 0px"
    //                 $flexDirection="row"
    //                 $gap={12}
    //               >
    //                 <BlogContentInput
    //                   label="Câu hỏi"
    //                   value={item.content}
    //                   maxLength={1000}
    //                   onChange={(value: string) => {
    //                     setData((prev) => ({
    //                       ...prev,
    //                       contact: prev.contact,
    //                     }));
    //                   }}
    //                 />
    //               </FlexContainer>
    //             )}
    //           </FlexContainer>
    //         ))}
    //       </FlexContainer>
    //     </FlexContainer>
    //   </FlexContainer>

    //   {/* Bảng action */}
    //   <FlexContainer
    //     $width="300px"
    //     $height="fit-content"
    //     $border="1px solid rgba(0,0,0,0.2)"
    //     $padding="12px"
    //     $gap={24}
    //   >
    //     <FlexContainer $gap={4}>
    //       <CustomBody $weight={600} $size={16}>
    //         Xác nhận chỉnh sửa
    //       </CustomBody>
    //       <CustomBody $size={14} $whiteSpace="normal" $color="#4F4F4F">
    //         Hãy kiểm tra kỹ các thay đổi trước khi lưu lại.
    //       </CustomBody>
    //     </FlexContainer>
    //     {isLoading ? (
    //       <CustomButton $bgColor="#aeaeae" $hoverBgColor="#f45c5c">
    //         <Loader />
    //         <CustomBody $color="#fff" $weight={600}>
    //           Đang thay đổi
    //         </CustomBody>
    //       </CustomButton>
    //     ) : (
    //       <MainButtonContainer
    //         $variant="secondary"
    //         onClick={() => handleUpdateFAQ()}
    //         $isDisable={isLoading}
    //       >
    //         Lưu thay đổi
    //       </MainButtonContainer>
    //     )}
    //   </FlexContainer>
    // </FlexContainer>
    <></>
  );
};

export default AboutBody;
