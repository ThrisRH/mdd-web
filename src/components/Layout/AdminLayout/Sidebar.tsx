import { Body2 } from "@/components/Typography/Body.styles";
import React from "react";
import { InfoContainer, SidebarWrapper, TabContainer } from "./Layout.styles";

import { useInfo } from "@/context/InfoContext";
import Image from "next/image";
import { H3 } from "@/components/Typography/Heading.styles";
import { usePathname, useRouter } from "next/navigation";
import { Tabs } from "@/app/(admin)/config/tabsConfig";

const Sidebar = () => {
  const { info } = useInfo();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarWrapper>
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
            <Body2
              $color={isSelected ? "#1c1c1c" : "#888"}
              $fontWeight={isSelected ? "500" : "400"}
            >
              {label}
            </Body2>
          </TabContainer>
        );
      })}
    </SidebarWrapper>
  );
};

export default Sidebar;
