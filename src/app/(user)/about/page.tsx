import { notFound } from "next/navigation";

import { About } from "@/types/about";
import { fetchAbout } from "@/utils/data/about-api";
import AboutScreen from "@/app/screens/client/about";

export default async function AboutPage() {
  const about: About = await fetchAbout();

  if (!about) notFound();
  return <AboutScreen about={about} />;
}
