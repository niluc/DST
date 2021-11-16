import React from 'react';
import BigList from './bigList';

const App = () => {
  let data = [
    {
      id: 1,
      title: 'Total Salary',
      value: 150,
    },
    {
      id: 2,
      title: 'Expense',
      value: 300,
    },
    {
      id: 3,
      title: 'Expense Month',
      value: 300,
    },
  ];
  const [listData, setData] = React.useState(data);
  return <BigList data={listData} />;
};

export default App;
