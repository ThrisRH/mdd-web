"use state";
import React, { useEffect, useState } from "react";
import {
  BellContainer,
  BoxTitle,
  ContentBox,
  DateTimeText,
  DotAlarmAbsolute,
  NotificationBox,
  NotificationCard,
  NotificationWrapper,
} from "./styled";
import BellIC from "@/assets/svg/notice-bell";

import Logo from "@/assets/image/logo.png";
import Image from "next/image";
import { BlogDetails } from "@/types/blog";
import Loading from "@/app/(user)/loading";
import { Column, Row } from "@/styles/common";
import { formatDate } from "@/section/admin/blogs/blog-table";
import { Dot, ImageContainer } from "@/section/client/blogs/blogcard/styled";
import { useRouter } from "next/navigation";
import { FlexContainer } from "@/styles/layout";

type NotificationProps = {
  documentId: string;
  publishedAt: string;
  message: string;
  isRead: boolean;
  blog: BlogDetails;
};

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationProps[] | []>(
    [],
  );
  const [notificationCounter, setNotificationCounter] = useState(0);
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const fetchNotification = async () => {
    try {
      const response = await fetch(
        "/mmdblogsapi/notifications?pagination[pageSize]=6&sort=createdAt:desc&populate[blog][populate]=cover",
      );
      if (!response.ok) {
        return null;
      }
      const data = await response.json();
      setNotifications(data.data);
    } catch (error: any) {
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleReadNotification = async (notification: NotificationProps) => {
    try {
      const res = await fetch(
        `/mmdblogsapi/notifications/${notification.documentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              message: notification.message,
              isRead: true,
              blog: notification.blog.documentId,
            },
          }),
        },
      );

      if (!res.ok) {
        return null;
      }

      router.push(`/blog-details/comments/${notification.blog.slug}`);
      setIsOpenNotification(false);
    } catch (error: any) {
      return null;
    }
  };

  useEffect(() => {
    fetchNotification();
  }, []);

  useEffect(() => {
    const counter = notifications.filter((item) => !item.isRead).length;
    setNotificationCounter(counter);
  }, [notifications]);

  return (
    <NotificationWrapper>
      <BellContainer
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpenNotification(!isOpenNotification)}
      >
        <BellIC />
        {notificationCounter !== 0 && (
          <DotAlarmAbsolute>
            <Dot $scale={8} $color="#FF0000" />
          </DotAlarmAbsolute>
        )}
      </BellContainer>
      {isOpenNotification && (
        <NotificationBox>
          <BoxTitle style={{ userSelect: "none" }}>
            <h3>Thông báo</h3>
          </BoxTitle>
          <ContentBox>
            {isLoading ? (
              <FlexContainer>
                <Loading />
              </FlexContainer>
            ) : notifications.length !== 0 ? (
              notifications.map((item) => (
                <NotificationCard
                  key={item.documentId}
                  onClick={() => handleReadNotification(item)}
                  $isRead={item.isRead}
                >
                  {!item.isRead && (
                    <FlexContainer
                      $width="fit"
                      $justify="center"
                      $flexDirection="row"
                    >
                      <Dot $color="#FF0000" $scale={6} />
                    </FlexContainer>
                  )}
                  <Image width={50} height={50} src={Logo} alt="logo" />
                  <Column $gap="none">
                    <p className="body-3">{item.message}</p>
                    <DateTimeText className="body-5">
                      {formatDate(item.publishedAt)}
                    </DateTimeText>
                  </Column>
                  <ImageContainer $variant="notification">
                    <Image
                      fill
                      style={{ objectFit: "cover" }}
                      src={`${
                        item.blog.cover.url.startsWith("https")
                          ? item.blog.cover.url
                          : `/baseurl${item.blog.cover.url}`
                      }`}
                      alt="thumbnail"
                    />
                  </ImageContainer>
                </NotificationCard>
              ))
            ) : (
              <Row $padding="12px" $justify="center" $align="center">
                <p className="body-1">Không có thông báo mới</p>
              </Row>
            )}
          </ContentBox>
        </NotificationBox>
      )}
    </NotificationWrapper>
  );
};

export default Notification;
