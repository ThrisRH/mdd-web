import { Body2, CustomBody } from "@/components/Typography/Body.styles";
import React from "react";
import {
  InfoContainer,
  SidebarItemsContainer,
  SidebarWrapper,
  TabContainer,
} from "../AdminLayout/Layout.styles";

import { useInfo } from "@/context/InfoContext";
import Image from "next/image";
import { H3 } from "@/components/Typography/Heading.styles";
import { usePathname, useRouter } from "next/navigation";
import { Tabs } from "@/app/(admin)/config/tabsConfig";
import { FlexContainer } from "@/styles/components/layout/FlexContainer.styles";

const AdminPanelSidebar = () => {
  const { info } = useInfo();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarWrapper>
      <SidebarItemsContainer>
        {info?.map((item, index) => (
          <InfoContainer key={index}>
            <Image
              className="rounded-full"
              alt="Avatar image"
              width={128}
              height={128}
              style={{ objectFit: "cover" }}
              src={
                item.avatar.url.startsWith("https")
                  ? item.avatar.url
                  : `/baseurl${item.avatar.url}`
              }
            />
            <H3>my {item.fullname} diary</H3>
          </InfoContainer>
        ))}

        <FlexContainer $width="100%" $gap={4}>
          {Tabs.map(({ path, icon: Icon, label }) => {
            const isSelected = pathname === path;
            return (
              <TabContainer
                key={path}
                $isSelected={isSelected}
                onClick={() => {
                  router.push(path);
                }}
              >
                <Icon />
                <CustomBody
                  $color={isSelected ? "#1c1c1c" : "#4f4f4f"}
                  $weight={isSelected ? "500" : "400"}
                >
                  {label}
                </CustomBody>
              </TabContainer>
            );
          })}
        </FlexContainer>
      </SidebarItemsContainer>
    </SidebarWrapper>
  );
};

export default AdminPanelSidebar;
