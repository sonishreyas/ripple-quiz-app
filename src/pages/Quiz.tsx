import { useDocumentTitle } from "custom-hooks";
import { QuizContent } from "components";

const Quiz = () => {
  useDocumentTitle("Quiz | Ripple Quiz");
  return <QuizContent />;
}
export { Quiz };
