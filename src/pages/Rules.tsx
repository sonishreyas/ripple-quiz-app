import { useDocumentTitle } from "custom-hooks";
import { RulesContent } from "components";
const Rules = () => {
  useDocumentTitle("Rules | Ripple Quiz");
  return <RulesContent />;
}
export { Rules };
