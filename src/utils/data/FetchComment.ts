import { HOST } from "@/app/(admin)/config/constant";
import { handleError } from "../HandleError";

export async function fetchComment(slug: string) {
  try {
    const res = await fetch(
      `${HOST}/api/comments?filters[blog][slug][$eq]=${slug}&populate[reader][populate]=avatar`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!data.data.documentId) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
