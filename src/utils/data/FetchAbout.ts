import { HOST } from "@/app/(admin)/config/constant";

export async function fetchAbout() {
  try {
    const res = await fetch(
      `${HOST}/api/about?populate[author][populate]=avatar&populate[author][populate]=contact`,
      { cache: "no-store" }
    );

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
