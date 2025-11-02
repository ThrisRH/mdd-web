import { fetchCateDetail } from "@/utils/data/FetchCategoryDetail";
import CateDetailScreen from "../../../screens/cate-detail";
import NotFound from "@/components/Main/NotFound";

type Props = {
  params: Promise<{ "cate-slug": string }>;
};

export default async function CateDetailPage({ params }: Props) {
  const { "cate-slug": slug } = await params;
  const cateDetail = await fetchCateDetail(slug);
  console.log("Data after fetch: ", cateDetail);

  if (!cateDetail) return <NotFound />;
  return <CateDetailScreen data={cateDetail} />;
}
