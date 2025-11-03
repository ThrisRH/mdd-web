import { fetchCate } from "@/utils/data/CateAPI";
import CategoryManagementScreen from "@/app/screens/admin-panel-tabs/cate-management";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function MyCatesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const pageRaw = searchParams.page || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr, 10);

  const result = await fetchCate(pageNumber);
  if (result) {
    return (
      <CategoryManagementScreen
        categories={result.data}
        totalPages={result.meta.pagination.pageCount}
        pageNumber={pageNumber}
      />
    );
  }
}
