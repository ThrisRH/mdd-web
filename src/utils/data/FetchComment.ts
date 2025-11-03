import { HOST } from "@/app/(admin)/config/constant";

export async function fetchComment(slug: string) {
  try {
    const res = await fetch(
      `${HOST}/api/comments?filters[blog][slug][$eq]=${slug}&populate[reader][populate]=avatar`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Fetch data failed");
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
