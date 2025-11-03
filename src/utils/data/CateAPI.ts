import { HOST } from "@/app/(admin)/config/constant";

export async function fetchCate(pageNumber: number) {
  try {
    const res = await fetch(
      `${HOST}/api/cates?pagination[page]=${pageNumber}&pagination[pageSize]=10&populate=*&sort=createdAt:desc`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Fetch data failed");
    }
    const data = await res.json();
    return {
      data: data.data || [],
      meta: data.meta,
    };
  } catch (error) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
