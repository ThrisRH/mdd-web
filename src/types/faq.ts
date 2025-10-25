export type FAQData = {
  questionAnswer: QuestAnswer[];
};

type QuestAnswer = {
  id: number;
  question: string;
  answer: string;
};
