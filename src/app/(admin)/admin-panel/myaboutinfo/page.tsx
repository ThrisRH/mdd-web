import AboutScreen from "@/app/screens/admin-panel-tabs/about-admin";
import NotFound from "@/components/Main/NotFound";
import { fetchAbout } from "@/utils/data/FetchAbout";

export default async function AboutPage() {
  try {
    const result = await fetchAbout();

    return <AboutScreen about={result} />;
  } catch (error) {
    return <NotFound />;
  }
}
