"use client";
import { handleError } from "@/utils/handle-error";
import { createContext, useContext, useEffect, useState } from "react";

export type InfoProps = {
  documentId: string;
  fullname: string;
  biography: string;
  contact: { id: number; platform: string; url: string }[];
  interest: { id: number; interest: string }[];
  avatar: { id: string; url: string; name: string };
};

type InfoContextType = {
  info: InfoProps[] | null;
  loading: boolean;
};

const InfoContext = createContext<InfoContextType>({
  info: null,
  loading: false,
});

export const InfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [info, setInfo] = useState<InfoProps[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchInfo = async () => {
    setLoading(true);
    try {
      const res = await fetch("/mmdblogsapi/authors?populate=*");
      const data = await res.json();
      setInfo(data.data);
    } catch (err) {
      handleError();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <InfoContext.Provider value={{ info, loading }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
