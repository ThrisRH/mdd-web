import { BlogDetails } from "@/types/blog";
import React, { ReactNode, useContext, useMemo, useState } from "react";

type BlogdetailcontextContextValue = {};

type BlogdetailcontextContextType = {
  value?: BlogDetails;
  setValue?: React.Dispatch<React.SetStateAction<BlogDetails | undefined>>;
};

export const BlogdetailcontextContext = React.createContext<
  BlogdetailcontextContextType | undefined
>(undefined);

export const useBlogdetailcontext = () => {
  const context = useContext(BlogdetailcontextContext);
  if (!context) {
    throw new Error(
      "useBlogdetailcontext can only be used within BlogdetailcontextProvider"
    );
  }
  return context;
};

const initialValue: BlogdetailcontextContextValue = {};

export const BlogdetailcontextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [value, setValue] = useState<BlogDetails | undefined>(undefined);

  const contextValue = useMemo(() => ({ value, setValue }), [value]);

  return (
    <BlogdetailcontextContext.Provider value={contextValue}>
      {children}
    </BlogdetailcontextContext.Provider>
  );
};
