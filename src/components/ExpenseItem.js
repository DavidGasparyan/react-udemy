import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

export default function ExpenseItem(props) {
  const expense = { ...props.expense };
  
  let title = expense.title;
  
  const clickHandler = () => {
    console.log('clicked');
    title = 'Updated!';
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
        <button onClick={clickHandler}>Save Title</button>
      </div>
    </Card>
  );
}