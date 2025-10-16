import { Body, Body2, CustomBody } from "@/components/Typography/Body.styles";
import React from "react";
import {
  InfoContainer,
  SidebarItemsContainer,
  SidebarContainer,
} from "../Layout.styles";

import { useInfo } from "@/context/InfoContext";
import Image from "next/image";
import { H3 } from "@/components/Typography/Heading.styles";
import { usePathname, useRouter } from "next/navigation";
import { Tabs } from "@/app/(admin)/config/tabsConfig";
import { TabsGroup } from "./Sidebar.styles";
import { TabContainer } from "@/styles/components/layout/Layout.styles";

const AdminPanelSidebar = () => {
  const { info } = useInfo();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarContainer>
      <SidebarItemsContainer $gap={32}>
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

        <TabsGroup>
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
                <Body
                  $variant="custom"
                  $color={isSelected ? "#1c1c1c" : "#4f4f4f"}
                  $weight={isSelected ? "500" : "400"}
                >
                  {label}
                </Body>
              </TabContainer>
            );
          })}
        </TabsGroup>
      </SidebarItemsContainer>
    </SidebarContainer>
  );
};

export default AdminPanelSidebar;
