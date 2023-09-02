const intialState = [
  { date: '2022-04-04 3:15:35 PM', amount: 5000, mode: 'Initial' },
];

let date = new Date().toISOString().slice(0, 10);
let time = new Date().toLocaleString().slice(10);
let dateTime = `${date} ${time}`;

const statementReducer = (statement = [...intialState], action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return statement.concat({
        date: dateTime,
        amount: action.payload,
        mode: 'Debited',
      });
    case 'DEPOSIT':
      return statement.concat({
        date: dateTime,
        amount: action.payload,
        mode: 'Credited',
      });
    default:
      return statement;
  }
};
export default statementReducer;
