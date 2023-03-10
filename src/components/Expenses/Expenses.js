import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');
  const expenses = props.expenses;
  const expenseYearChangeHandler = (year) => {
    setSelectedYear(year);
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onExepnseYearChange={expenseYearChangeHandler}
        />
        {
          expenses.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)
        }
      </Card>
    </div>
  );
}