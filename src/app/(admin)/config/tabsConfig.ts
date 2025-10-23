import BlogsIC from "@/assets/svg/sidebarAdmin/blog";
import CateIC from "@/assets/svg/sidebarAdmin/cate";
import AboutIC from "@/assets/svg/sidebarAdmin/about";
import FaqsIC from "@/assets/svg/sidebarAdmin/faq";
import CommentIC from "@/assets/svg/sidebar/comment";
import PencilIC from "@/assets/svg/sidebar/Pencil";

export const Tabs = [
  { path: "/admin-panel/myblogs", icon: BlogsIC, label: "Bài viết" },
  { path: "/admin-panel/mycates", icon: CateIC, label: "Danh mục" },
  { path: "/admin-panel/myaboutinfo", icon: AboutIC, label: "Cài đặt mô tả" },
  { path: "/admin-panel/myfaqsetting", icon: FaqsIC, label: "Cài đặt FAQs" },
];

export const BlogDetailTabs = [
  { path: `/blog-details/info`, icon: PencilIC, label: "Chi tiết" },
  {
    path: `/blog-details/comments`,
    icon: CommentIC,
    label: "Bình luận",
  },
];
