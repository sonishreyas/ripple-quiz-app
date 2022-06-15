export type QuizDataType = {
  _id: string;
  title: string;
  totalScore: number;
  description: string;
  imageURL: string;
  mcqs: [];
  catergoryName: string;
  createdBy: string;
}

export type QuizState = {
  quizzes: Array<QuizDataType> | [];
	filterQuizData: Array<QuizDataType> | [];
	newQuiz: {};
} | null

export type QuizActionType = 
  | {
    type: "ADD_NEW_QUIZ";
    payload: {
      quiz: QuizDataType;
    }
  } 
  | {
    type: "REMOVE_QUIZ";
    payload: {
      quizzes: Array<QuizDataType> | [];
    }
  }
  | {
    type: "GET_QUIZ";
    payload: {
      quizzes: Array<QuizDataType> | [];
      filterQuizData: Array<QuizDataType> | [];
    }
  }
  | {
    type: "FILTER_QUIZ_DATA";
    payload: {
      filterQuizData: Array<QuizDataType> | [];
    }
  }
  | {
    type: "NEW_QUIZ";
    payload: {
      newQuiz: {};
    }
  }
  | {
    type: "RESET_FORM";
  }
  | {
    type: "RESET";
  }

export type RulesType = {
  _id: string;
  rule: string;
}

export type CategoryType = {
  _id: string;
  categoryName: string;
  description: string;
}

export type QuizCtxType = {
  quizState: QuizState;
  quizDispatch: QuizActionType;
  categoriesData: Array<CategoryType> | [];
  rulesData: Array<RulesType> | [];
}