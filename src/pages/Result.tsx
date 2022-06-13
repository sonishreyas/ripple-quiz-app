import { useDocumentTitle } from "custom-hooks";
import { ResultContent } from "components";

const Result = () => {
  useDocumentTitle("Result | Ripple Quiz");
  return <ResultContent />;
}
export { Result };
