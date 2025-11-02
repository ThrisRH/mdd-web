import { HOST } from "@/app/(admin)/config/constant";

export async function fetchBlogDetail(slug: string) {
  try {
    const res = await fetch(`${HOST}/api/blogs/by-slug/${slug}`, {
      cache: "no-store",
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
