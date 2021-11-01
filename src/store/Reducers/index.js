import quizList from './quizList';
import questions from './questions';
import result from './result';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  quizList,
  questions,
  result
});

export default reducers;