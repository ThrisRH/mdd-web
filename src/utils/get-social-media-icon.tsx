import FacebookIC from "@/assets/svg/fb";
import TwitterIC from "@/assets/svg/x";
import IGIC from "@/assets/svg/ig";
import LinkedinIC from "@/assets/svg/linkedin";
import YoutubeIC from "@/assets/svg/youtube";
import GithubIC from "@/assets/svg/github";

export function getSocialMediaIcon(platform: string) {
  switch (platform) {
    case "Facebook":
      return <FacebookIC />;
    case "Instagram":
      return <IGIC />;
    case "X":
      return <TwitterIC />;
    case "LinkedIn":
      return <LinkedinIC />;
    case "Youtube":
      return <YoutubeIC />;
    case "Github":
      return <GithubIC />;
    default:
      return null;
  }
}
