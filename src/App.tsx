import { useEffect, useState } from 'react';
import headingImg from '/heading.svg';
import { QuestionsBoard } from './components/QuestionsBoard';
import { ResultBoard } from './components/ResultBoard';
import { IApiResponse, useFetchData } from './hooks/useFetchData';
import { randomNumbers } from './utils/randomNumbers';
import {
  generateRandomQuestion,
  IGeneratedQuestion,
} from './utils/generateRandomQuestion';

interface IQuestions {
  img?: string;
  question: string;
  answer: string;
}

export default function App() {
  const [questions, setQuestions] = useState({} as IGeneratedQuestion);
  const [questionsCounter, setQuestionsCounter] = useState<number>(0);
  const [numberOfRightQuestions, setNumberOfRightQuestions] =
    useState<number>(0);
  const data: IApiResponse = useFetchData('https://restcountries.com/v3.1/all');

  const dataNumber = randomNumbers(250);
  const questionNumber = randomNumbers(2);

  console.log(numberOfRightQuestions);

  const question =
    !data.loading &&
    generateRandomQuestion(data.data, dataNumber, questionNumber);

  useEffect(() => {
    if (question) setQuestions(question);
  }, [questionsCounter]);

  return (
    <div className='bg-bgImage bg-center bg-no-repeat bg-cover min-h-screen flex flex-col justify-between relative'>
      <article className='flex flex-col mt-[8%] mx-auto relative '>
        <div className='flex items-center gap-4 mx-4'>
          <h1 className='font-bold text-white text-lg md:text-4xl'>
            COUNTRY QUIZ
          </h1>
          <div className='absolute right-0 w-20 h-16 md:h-32 md:w-40'>
            <img
              src={headingImg}
              className=''
              alt=''
              height={120}
              width={160}
            />
          </div>
        </div>
        {questionsCounter < 6 ? (
          <QuestionsBoard
            counter={questionsCounter}
            data={questions}
            setCounter={setQuestionsCounter}
            setRightQuestion={setNumberOfRightQuestions}
          />
        ) : (
          <ResultBoard
            numberOfRightQuestions={numberOfRightQuestions}
            setCounter={setQuestionsCounter}
            setRightQuestion={setNumberOfRightQuestions}
          />
        )}
      </article>
      <p className='text-white self-center'>
        created by <span className='underline font-bold'>Sérgio Valério</span> -
        devChallenges.io
      </p>
    </div>
  );
}
