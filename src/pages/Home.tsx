import { useDocumentTitle } from "custom-hooks";
import { HomeContent } from "components";

const Home = () => {
  useDocumentTitle("Home | Ripple Quiz");
  return <HomeContent />;
}
export { Home };
