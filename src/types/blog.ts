import { CommentProps } from "./comment";

export type BlogDetails = {
  documentId: string;
  slug: string;
  title: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  mainContent: string;
  cover: Cover;
  subContent: string;
  optionImage: OptionImage[];
  cate?: Cate;
  comments?: CommentProps[];
};

type Cover = {
  documentId: string;
  url: string;
};

type Image = {
  documentId: string;
  url: string;
};

type OptionImage = {
  image: Image[];
};

type Cate = {
  documentId: string;
  tile: string;
};
