import { InfoProps } from "@/context/InfoContext";

export type About = {
  id: number;
  aboutContent: string;
  author: InfoProps;
  contact: Contact[] | undefined;
};

export type AboutState = About & {
  avatarFileTemp: File;
};

export type Contact = {
  id: number;
  content: string;
};
