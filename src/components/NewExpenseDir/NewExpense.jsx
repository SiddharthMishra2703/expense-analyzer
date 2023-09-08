import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const getExpense = (expense) => {
        expense["id"] = Math.random();
        props.saveExpense(expense);
    };

    const addNewExpense = () => {
        setIsEditing(true);
    };

    const closeForm = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={addNewExpense}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm closeForm={closeForm} sendExpense={getExpense} />
            )}
        </div>
    );
};

export default NewExpense;
