import { InfoProps } from "@/context/InfoContext";

export type About = {
  id: number;
  aboutContent: string;
  author: InfoProps;
  contact: Contact[];
};

export type AboutState = About & {
  avatarFileTemp: File;
};

type Contact = {
  id: number;
  content: string;
};
