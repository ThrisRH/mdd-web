import BlogManagementScreen from "@/app/screens/admin/admin-panel-tabs/blog-management";
import NotFound from "@/section/client/main/not-found";
import { fetchBlog } from "@/utils/data/blog-api";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function MyBlogsPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const pageRaw = searchParams.page || "1";
  const pageStr = Array.isArray(pageRaw) ? pageRaw[0] : pageRaw;
  const pageNumber = parseInt(pageStr, 10);

  try {
    const result = await fetchBlog(pageNumber, 10);

    return (
      <BlogManagementScreen
        blogs={result.data}
        totalPages={result.meta.pagination.pageCount}
        pageNumber={pageNumber}
      />
    );
  } catch (error) {
    return <NotFound />;
  }
}
