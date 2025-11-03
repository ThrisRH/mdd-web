import { HOST } from "@/app/(admin)/config/constant";

export async function fetchCate(pageNumber: number) {
  try {
    const res = await fetch(
      `${HOST}/api/cates?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate=*&sort=createdAt:desc`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      return {
        type: "error",
      };
    }
    const data = await res.json();
    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
