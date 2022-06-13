import { useDocumentTitle } from "custom-hooks";
import { ProfileContent } from "components";

const Profile = () => {
  useDocumentTitle("Profile | Ripple Quiz");
  return <ProfileContent />;
}
export { Profile };
