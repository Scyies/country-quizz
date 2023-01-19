import { useState } from 'react';
import { IGeneratedQuestion } from '../utils/generateRandomQuestion';
import { Alternative } from './Alternatives';
import { Button } from './Button';

interface IProps {
  data: IGeneratedQuestion;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  setRightQuestion: React.Dispatch<React.SetStateAction<number>>;
}

export interface ISelectedAlternative {
  answer: string;
  correct: boolean;
}

export function QuestionsBoard({
  data,
  setCounter,
  counter,
  setRightQuestion,
}: IProps) {
  const { img, question, alternatives } = data;

  const [selectedAlternative, setSelectedAlternative] = useState(
    null as ISelectedAlternative | null
  );

  function nextQuestion() {
    if (selectedAlternative?.correct) setRightQuestion((prev) => prev + 1);
    setSelectedAlternative(null);
    setCounter((prev) => {
      if (prev === 6) return 6;
      return prev + 1;
    });
  }

  console.log(alternatives);

  return (
    <section className='flex flex-col gap-8 p-8 pt-16 mt-4 bg-white rounded-xl w-[90%] mx-auto max-w-[500px]'>
      <div className='flex flex-col'>
        {img && counter > 0 && <img src={img} alt='' height={80} width={200} />}
        {counter > 0 ? (
          <h2 className='font-bold text-2xl text-blue-900'>{question}</h2>
        ) : (
          <h2 className='font-bold text-2xl text-blue-900'>
            Test your country knowledge
          </h2>
        )}
      </div>
      {counter > 0 &&
        alternatives.map((alt, index) => (
          <Alternative
            alternative={alt.answer}
            correct={alt.correct}
            index={index}
            key={index}
            setAlternative={setSelectedAlternative}
            selectedAlternative={selectedAlternative}
          />
        ))}
      {counter === 0 ? (
        <Button
          onClick={() =>
            setCounter((prev) => {
              if (prev === 6) return 6;
              return prev + 1;
            })
          }
        >
          Start
        </Button>
      ) : (
        <Button onClick={nextQuestion}>Next</Button>
      )}
    </section>
  );
}
