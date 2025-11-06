import { HOST } from "@/config/host-env";

export async function fetchAbout() {
  try {
    const res = await fetch(
      `${HOST}/api/about?populate[author][populate]=avatar&populate[author][populate]=contact`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error("Fetch data failed");
    }
    const data = await res.json();

    return data.data;
  } catch (error: any) {
    console.error("A server error occurred. Try again later.");
    throw error;
  }
}
