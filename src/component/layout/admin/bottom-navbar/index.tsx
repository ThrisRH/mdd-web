import React from "react";
import { NavbarWrapper } from "./styled";
import { BlogDetailTabs, Tabs } from "@/config/tabs-config";
import { usePathname, useRouter } from "next/navigation";
import { TabContainer } from "@/styles/layout";
import { useBlogdetailcontext } from "@/context/blogdetailcontext";

const BottomNavbar = () => {
  const { value } = useBlogdetailcontext();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <NavbarWrapper className="BottomNavbar">
      {pathname.startsWith("/admin-panel")
        ? Tabs.map(({ path, icon: Icon }) => {
            const isSelected = pathname === path;
            return (
              <TabContainer
                $scale="48px"
                key={path}
                $isSelected={isSelected}
                onClick={() => {
                  router.push(path);
                }}
              >
                <Icon />
              </TabContainer>
            );
          })
        : BlogDetailTabs.map(({ path, icon: Icon }) => {
            return (
              <TabContainer
                $scale="48px"
                key={path}
                $isSelected={pathname.endsWith(path)}
                onClick={() => {
                  router.push(`/blog-details/${value?.slug}/${path}`);
                }}
              >
                <Icon />
              </TabContainer>
            );
          })}
    </NavbarWrapper>
  );
};

export default BottomNavbar;
