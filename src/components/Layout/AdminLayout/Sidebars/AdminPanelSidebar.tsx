import React from "react";
import {
  InfoContainer,
  SidebarItemsContainer,
  SidebarContainer,
} from "../Layout.styles";

import { useInfo } from "@/context/InfoContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Tabs } from "@/app/(admin)/config/tabsConfig";
import { TabsGroup } from "./Sidebar.styles";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { ImageContainer } from "@/components/blogs/blogcard/styled";
import { Text } from "@/styles/theme/typography";

const AdminPanelSidebar = () => {
  const { info } = useInfo();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarContainer>
      <SidebarItemsContainer $gap={32}>
        {info?.map((item, index) => (
          <InfoContainer key={index}>
            <ImageContainer $variant="avatar">
              <Image
                className="rounded-full"
                alt="Avatar image"
                fill
                style={{ objectFit: "cover" }}
                src={
                  item.avatar.url.startsWith("https")
                    ? item.avatar.url
                    : `/baseurl${item.avatar.url}`
                }
              />
            </ImageContainer>
            <Text $variant="h3">my {item.fullname} diary</Text>
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
                <Text $variant="body2" $color="#4f4f4f">
                  {label}
                </Text>
              </TabContainer>
            );
          })}
        </TabsGroup>
      </SidebarItemsContainer>
    </SidebarContainer>
  );
};

export default AdminPanelSidebar;
