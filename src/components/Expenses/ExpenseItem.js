import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from "react";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);
  
  const expense = { ...props.expense };
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title)
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