import { IData } from '../hooks/useFetchData';
import { randomNumbers } from './randomNumbers';
import { shuffleAlternatives } from './shuffleAlternatives';
import Continents from '../Continents.json';

export function checkQuestion(
  randomQuestion: string,
  randomCountry: IData,
  questionRandomNumber: number,
  data: IData[]
) {
  const alternativesNumber = randomNumbers(250);

  const secondNumber = Math.round((alternativesNumber + 10) / 2);
  const thirdNumber = Math.round((alternativesNumber + 10) / 3);
  const fourthNumber = Math.round((alternativesNumber + 10) / 4);

  if (randomQuestion.includes('flag')) {
    const img = randomCountry?.flags?.svg;
    const question = randomQuestion;
    const answer = randomCountry?.name?.common;

    const secondAlternative =
      secondNumber !== questionRandomNumber
        ? data && data[secondNumber]?.name?.common
        : data && data[Math.round(secondNumber / 2)]?.name?.common;
    const thirdAlternative =
      thirdNumber !== questionRandomNumber
        ? data && data[thirdNumber]?.name?.common
        : data && data[Math.round(thirdNumber / 2)]?.name?.common;
    const fourthAlternative =
      fourthNumber !== questionRandomNumber
        ? data && data[fourthNumber]?.name?.common
        : data && data[Math.round(fourthNumber / 2)]?.name?.common;

    const alts = [
      {
        answer: answer,
        correct: true,
      },
      {
        answer: secondAlternative,
        correct: false,
      },
      {
        answer: thirdAlternative,
        correct: false,
      },
      {
        answer: fourthAlternative,
        correct: false,
      },
    ];

    const alternatives = shuffleAlternatives(alts);

    return {
      question,
      img,
      alternatives,
    };
  }
  if (randomQuestion.includes('capital')) {
    const question = randomCountry?.capital[0] + randomQuestion;
    const answer = randomCountry?.name.common;

    const secondAlternative =
      secondNumber !== questionRandomNumber
        ? data && data[secondNumber]?.name?.common
        : data && data[Math.round(secondNumber / 2)]?.name?.common;
    const thirdAlternative =
      thirdNumber !== questionRandomNumber
        ? data && data[thirdNumber]?.name?.common
        : data && data[Math.round(thirdNumber / 2)]?.name?.common;
    const fourthAlternative =
      fourthNumber !== questionRandomNumber
        ? data && data[fourthNumber]?.name?.common
        : data && data[Math.round(fourthNumber / 2)]?.name?.common;

    const alts = [
      {
        answer: answer,
        correct: true,
      },
      {
        answer: secondAlternative,
        correct: false,
      },
      {
        answer: thirdAlternative,
        correct: false,
      },
      {
        answer: fourthAlternative,
        correct: false,
      },
    ];

    const alternatives = shuffleAlternatives(alts);

    return {
      question,
      alternatives,
    };
  }

  const question = randomCountry?.name?.common + ' ' + randomQuestion;
  const answer = randomCountry?.continents[0];

  function verifyDiffContinents(
    correct: string,
    secondAlternative?: string,
    thirdAlternative?: string
  ): string {
    const alternative = Continents.find(
      (e) => e !== correct && e !== secondAlternative && e !== thirdAlternative
    );

    return alternative!;
  }

  const secondAlternative = verifyDiffContinents(answer);
  const thirdAlternative = verifyDiffContinents(answer, secondAlternative);
  const fourthAlternative = verifyDiffContinents(
    answer,
    secondAlternative,
    thirdAlternative
  );

  const alts = [
    {
      answer: answer,
      correct: true,
    },
    {
      answer: secondAlternative,
      correct: answer === secondAlternative ? true : false,
    },
    {
      answer: thirdAlternative,
      correct: answer === thirdAlternative ? true : false,
    },
    {
      answer: fourthAlternative,
      correct: answer === fourthAlternative ? true : false,
    },
  ];

  const alternatives = shuffleAlternatives(alts);

  return {
    question,
    alternatives,
  };
}
