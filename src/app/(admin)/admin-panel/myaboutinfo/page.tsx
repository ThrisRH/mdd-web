import AboutScreen from "@/app/screens/admin-panel-tabs/about-admin";
import { fetchAbout } from "@/utils/data/FetchAbout";

export default async function AboutPage() {
  const about = await fetchAbout();

  return <AboutScreen about={about} />;
}
