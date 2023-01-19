import { Button } from './Button';
import winner from '/winner.svg';

interface IProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  numberOfRightQuestions: number;
  setRightQuestion: React.Dispatch<React.SetStateAction<number>>;
}

export function ResultBoard({
  setCounter,
  numberOfRightQuestions,
  setRightQuestion,
}: IProps) {
  function tryAgain() {
    setRightQuestion(0);
    setCounter(0);
  }
  return (
    <section className='flex flex-col items-center gap-8 p-8 pt-16 mt-4 bg-white rounded-xl w-full md:w-[500px] max-w-[500px]'>
      <img src={winner} alt='' />
      <h1 className='font-bold text-5xl text-blue-800'>Result</h1>
      <p className='text-blue-800'>
        You got{' '}
        <span className='font-bold text-green-500 text-4xl'>
          {numberOfRightQuestions}
        </span>{' '}
        correct answers
      </p>
      <Button variant='secondary' onClick={tryAgain}>
        Try Again
      </Button>
    </section>
  );
}
