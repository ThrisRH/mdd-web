import { fetchCate } from "@/utils/data/CateAPI";
import CategoryManagementScreen from "@/app/screens/admin-panel-tabs/cate-management";
import NotFound from "@/components/Main/NotFound";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function MyCatesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const pageRaw = searchParams.page || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr, 10);

  try {
    const result = await fetchCate(pageNumber);
    return (
      <CategoryManagementScreen
        categories={result.data}
        totalPages={result.meta.pagination.pageCount}
        pageNumber={pageNumber}
      />
    );
  } catch (error) {
    return <NotFound />;
  }
}
