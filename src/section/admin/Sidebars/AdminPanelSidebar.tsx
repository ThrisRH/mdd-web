import React from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Tabs } from "@/config/tabs-config";
import {
  InfoContainer,
  SidebarContainer,
  SidebarItemsContainer,
  TabsGroup,
} from "./styled";
import { TabContainer } from "@/styles/components/layout/Layout.styles";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";
import { Text } from "@/styles/theme/typography";
import { useAppSelector } from "@/redux/hook";
import { FlexContainer } from "@/styles/components/layout/Common.styles";

const AdminPanelSidebar = () => {
  const MDDAuthor = useAppSelector((state) => state.mainBlogAuthor);
  const info = MDDAuthor.data;
  const pathname = usePathname();
  const router = useRouter();

  if (MDDAuthor.loading === "idle") return <FlexContainer></FlexContainer>;
  if (MDDAuthor.loading === "pending") return <FlexContainer></FlexContainer>;
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
