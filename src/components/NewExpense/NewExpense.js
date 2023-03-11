import ExpenseForm from "./ExpenseForm";
import {useState} from "react";
import './NewExpense.css';

export default function NewExpense(props) {
  const [isExpenseFormHidden, setIsExpenseFormHidden] = useState(false);
  const saveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString()
    };
    
    props.onAddExpense(expenseData);
    setIsExpenseFormHidden(true);
  }
  const hideExpenseFormHandler = () => {
    setIsExpenseFormHidden(true);
  }
  const showExpenseFormHandler = () => {
    setIsExpenseFormHidden(false);
  }
  
  if (isExpenseFormHidden) {
    return (
      <div className='new-expense'>
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      </div>
    );
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onHideEpenseForm={hideExpenseFormHandler}
      />
    </div>
  );
}