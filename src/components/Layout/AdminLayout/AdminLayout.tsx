import React from 'react';
import Header from '@/components/Layout/AdminLayout/Header';
import { AdminLayoutContainer, BodyWrapper, SidebarContainer } from '@/components/Layout/AdminLayout/Layout.styles';
import { MainContentContainer } from '@/styles/components/layout/Layout.styles';

interface AdminLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, sidebar }) => {
  return (
    <AdminLayoutContainer>
      <Header />
      <BodyWrapper>
        {sidebar && (
          <SidebarContainer>
            {sidebar}
          </SidebarContainer>
        )}
        <MainContentContainer>
          {children}
        </MainContentContainer>
      </BodyWrapper>
    </AdminLayoutContainer>
  );
};

export function withAdminLayout(
  WrappedComponent: React.ComponentType<any>,
  SidebarComponent?: React.ComponentType<any>
) {
  return function WithAdminLayoutComponent(props: any) {
    return (
      <AdminLayout
        sidebar={SidebarComponent ? <SidebarComponent {...props} /> : undefined}
      >
        <WrappedComponent {...props} />
      </AdminLayout>
    );
  };
}