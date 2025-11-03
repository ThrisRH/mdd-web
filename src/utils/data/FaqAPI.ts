import { HOST } from "@/app/(admin)/config/constant";

export async function fetchFAQ() {
  try {
    const res = await fetch(`${HOST}/api/faq?populate=*`, {
      cache: "no-store",
    });

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
