import BlogsIC from "@/assets/svg/panel-sidebar/blog";
import CateIC from "@/assets/svg/panel-sidebar/cate";
import AboutIC from "@/assets/svg/panel-sidebar/about";
import FaqsIC from "@/assets/svg/panel-sidebar/faq";
import CommentIC from "@/assets/svg/detail-sidebar/comment";
import PencilIC from "@/assets/svg/detail-sidebar/Pencil";

export const Tabs = [
  { path: "/admin-panel/myblogs", icon: BlogsIC, label: "Bài viết" },
  { path: "/admin-panel/mycates", icon: CateIC, label: "Danh mục" },
  { path: "/admin-panel/myaboutinfo", icon: AboutIC, label: "Cài đặt mô tả" },
  { path: "/admin-panel/myfaqsetting", icon: FaqsIC, label: "Cài đặt FAQs" },
];

export const BlogDetailTabs = [
  { path: `/info`, icon: PencilIC, label: "Chi tiết" },
  {
    path: `/comment`,
    icon: CommentIC,
    label: "Bình luận",
  },
];
