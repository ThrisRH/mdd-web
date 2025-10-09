import DashboardIC from "@/assets/svg/sidebarAdmin/dashboard";
import BlogsIC from "@/assets/svg/sidebarAdmin/blog";
import CateIC from "@/assets/svg/sidebarAdmin/cate";
import AboutIC from "@/assets/svg/sidebarAdmin/about";
import FaqsIC from "@/assets/svg/sidebarAdmin/faq";

export const Tabs = [
  { path: "/dashboard", icon: DashboardIC, label: "Tổng quát" },
  { path: "/myblogs", icon: BlogsIC, label: "Bài viết" },
  { path: "/mycates", icon: CateIC, label: "Danh mục" },
  { path: "/myaboutinfo", icon: AboutIC, label: "Cài đặt mô tả" },
  { path: "/myfaqsetting", icon: FaqsIC, label: "Cài đặt FAQs" },
];
