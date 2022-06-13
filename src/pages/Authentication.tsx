import { useDocumentTitle } from "custom-hooks";
import { AuthContent } from "components";
const Authentication = () => {
  useDocumentTitle("Auth | Ripple Quiz");
  return <AuthContent />;
}

export { Authentication };
