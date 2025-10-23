export type FAQ = {
  questionAnswer: QuestAnswer[];
};

type QuestAnswer = {
  id: number;
  question: string;
  answer: string;
};
