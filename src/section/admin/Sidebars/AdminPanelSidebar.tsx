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
import { FlexContainer, TabContainer } from "@/styles/layout";
import { ImageContainer } from "@/section/client/blogs/blogcard/styled";
import { useAppSelector } from "@/redux/hook";

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
            <h3>my {item.fullname} diary</h3>
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
                <p className="body-2">{label}</p>
              </TabContainer>
            );
          })}
        </TabsGroup>
      </SidebarItemsContainer>
    </SidebarContainer>
  );
};

export default AdminPanelSidebar;
