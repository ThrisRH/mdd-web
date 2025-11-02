import { HOST } from "@/app/(admin)/config/constant";

export async function fetchCateDetail(slug: string) {
  try {
    const res = await fetch(`${HOST}/api/cates/${slug}?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!data.data.documentId) {
      return null;
    }

    return data.data;
  } catch (error: any) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
