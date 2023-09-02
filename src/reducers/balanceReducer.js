const transactionReducer = (balance = 5000, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return balance + action.payload;
    case 'WITHDRAW':
      return balance - action.payload;
    default:
      return balance;
  }
};
export default transactionReducer;
