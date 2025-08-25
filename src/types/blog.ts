export interface BlogDetails {
  documentId: string,
  slug: string,
  title: string,
  publishedAt: string,
  mainContent: string,
  cover: Cover;
  subContent: SubContent[];
  optionImage: OptionImage[];
  cate?: Cate
}

interface Cover{
  documentId: string,
  url:string
}

interface SubContent {
  id: number;
  content: string,
  image: Image[]
}

interface Image {
    documentId: string,
    url: string,
}

interface OptionImage {
  image: Image[];
}

interface Cate {
  documentId: string,
  tile: string,
}