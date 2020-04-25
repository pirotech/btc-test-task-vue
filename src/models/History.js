import moment from 'moment';
import {ADD_TO_MUST_READ} from './constants';

const History = {
  getDefaultHistories: () => ([
    {
      id: 1,
      type: ADD_TO_MUST_READ,
      book: {
        id: 1000,
        title: 'Fight Club',
        author: 'Chuck Palahniuk'
      },
      createdDate: moment('2020-04-25T15:46:00')
    },
    {
      id: 0,
      type: ADD_TO_MUST_READ,
      book: {
        id: 1001,
        title: 'The Trial',
        author: 'Franz Kafka'
      },
      createdDate: moment('2020-04-22T12:00:00')
    }
  ]),
  getStoredHistories: () => {
    let result = localStorage.getItem('histories');
    result = JSON.parse(result, (k, v) => {
      if (k === 'createdDate') {
        return moment(v);
      }
      return v;
    });
    return result;
  }
};

export default History;
