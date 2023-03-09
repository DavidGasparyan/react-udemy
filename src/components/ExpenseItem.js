import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

export default function ExpenseItem(props) {
  const expense = { ...props.expense }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
    </Card>
  );
}