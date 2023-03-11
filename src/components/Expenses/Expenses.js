import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020');
  const expenseYearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === +selectedYear);
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onExepnseYearChange={expenseYearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}