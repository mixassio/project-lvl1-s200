import { runGames } from '../index';
import randomNum from './my_func/randomNum';

const text = 'Answer "yes" if number even otherwise answer "no".';
const questionAnswer = () => {
  const que = randomNum(1, 100);
  const answ = que % 2 === 0 ? 'yes' : 'no';
  return [que, answ];
};
const even = () => {
  runGames(text, questionAnswer);
};

export default even;

