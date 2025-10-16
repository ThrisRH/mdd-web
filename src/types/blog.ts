import { CommentProps } from "./comment";

export interface BlogDetails {
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
}

interface Cover {
  documentId: string;
  url: string;
}

interface Image {
  documentId: string;
  url: string;
}

interface OptionImage {
  image: Image[];
}

interface Cate {
  documentId: string;
  tile: string;
}
