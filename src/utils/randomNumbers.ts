export function randomNumbers(maximumNumber: number): number {
  const newNumber = Math.floor(Math.random() * maximumNumber) + 1;

  return newNumber;
}
