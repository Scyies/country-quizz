import Questions from '../Questions.json';
import { checkQuestion } from './checkQuestion';
import { IData } from '../hooks/useFetchData';

export interface IGeneratedQuestion {
  img?: string;
  question: string;
  alternatives: { answer: string; correct: boolean }[];
}

export function generateRandomQuestion(
  data: IData[],
  dataNumber: number,
  questionNumber: number
): IGeneratedQuestion {
  const randomCountry = data && data[dataNumber];
  const randomQuestion = Questions[questionNumber].question;

  const questionAbout = checkQuestion(
    randomQuestion,
    randomCountry,
    questionNumber,
    data
  );

  return questionAbout;
}
