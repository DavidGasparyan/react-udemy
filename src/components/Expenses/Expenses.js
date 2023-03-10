import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../UI/Card";

export default function Expenses(props) {
  const expenses = props.expenses;
  
  return (
    <Card className="expenses">
      {
        expenses.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)
      }
    </Card>
  );
}