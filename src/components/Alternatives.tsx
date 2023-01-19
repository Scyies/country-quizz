import { CheckCircle, XCircle } from 'phosphor-react';
import clsx from 'clsx';
import { Dispatch } from 'react';
import { ISelectedAlternative } from './QuestionsBoard';

interface IProps {
  alternative: string;
  index: number;
  correct: boolean;
  setAlternative: Dispatch<React.SetStateAction<ISelectedAlternative | null>>;
  selectedAlternative: ISelectedAlternative | null;
}

export function Alternative({
  alternative,
  index = 0,
  correct,
  setAlternative,
  selectedAlternative,
}: IProps) {
  function checkIndex() {
    switch (index) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
    }
  }

  return (
    <div
      onClick={() =>
        setAlternative({
          answer: alternative,
          correct: correct,
        })
      }
      className={clsx(
        'border rounded-xl grid grid-cols-alternative py-3 align-middle cursor-pointer',
        {
          'border-green-500 bg-green-500 text-white':
            (selectedAlternative?.answer === alternative && correct) ||
            (selectedAlternative !== null && correct),
          'text-white border-red-500 bg-red-500 ':
            selectedAlternative?.answer === alternative && !correct,
          'border-blue-500 text-blue-500':
            (selectedAlternative?.answer !== alternative && !correct) ||
            selectedAlternative === null,
          'cursor-not-allowed pointer-events-none': selectedAlternative,
        }
      )}
    >
      <span className='flex justify-center text-2xl font-medium'>
        {checkIndex()}
      </span>
      <p className='text-lg'>{alternative}</p>
      {selectedAlternative && (
        <span className='flex place-items-center justify-center text-xl'>
          {correct ? (
            <CheckCircle size={20} weight='regular' />
          ) : (
            <XCircle size={20} weight='regular' />
          )}
        </span>
      )}
    </div>
  );
}
