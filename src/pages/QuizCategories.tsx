import { useDocumentTitle } from "custom-hooks";
import { QuizCategoriesContent } from "components";

const QuizCategories = () => {
  useDocumentTitle("Quiz Category | Ripple Quiz");
  return <QuizCategoriesContent />;
}
export { QuizCategories };
