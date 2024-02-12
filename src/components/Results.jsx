import { calculateInvestmentResults } from '../util/investment.js';

export const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);

  console.log(resultsData);

  return <p>Results...</p>;
};
