import { fetchCateDetail } from "@/utils/data/FetchCategoryDetail";
import CateDetailScreen from "../../../screens/cate-detail/cate-detail";

type Props = {
  params: Promise<{ "cate-slug": string }>;
};

export default async function CateDetailPage({ params }: Props) {
  const { "cate-slug": slug } = await params;
  const cateDetail = await fetchCateDetail(slug);

  return <CateDetailScreen cateDetail={cateDetail} />;
}
