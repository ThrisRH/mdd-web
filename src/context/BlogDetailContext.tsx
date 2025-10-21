"use client";
import { BlogDetails } from "@/types/blog";
import { createContext, useContext, useEffect, useState } from "react";

interface BlogDetailContextType {
  blogDetail: BlogDetails | null;
  setBlogDetail: (value: BlogDetails | null) => void;
}

const BlogDetailContext = createContext<BlogDetailContextType>({
  blogDetail: null,
  setBlogDetail: () => {},
});

export const BlogDetailProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blogDetail, setBlogDetail] = useState<BlogDetails | null>(null);
  return (
    <BlogDetailContext.Provider value={{ blogDetail, setBlogDetail }}>
      {children}
    </BlogDetailContext.Provider>
  );
};

export const useBlogDetail = () => useContext(BlogDetailContext);
