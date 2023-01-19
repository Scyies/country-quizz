export function shuffleAlternatives(
  alternatives: { answer: string; correct: boolean }[]
): { answer: string; correct: boolean }[] {
  const shuffledAlternatives = alternatives.sort(() => {
    return Math.random() - 0.5;
  });
  return shuffledAlternatives;
}

// const shuffledAlternatives = alternatives.sort(() => {
//   return Math.random() - 0.5;
// });
