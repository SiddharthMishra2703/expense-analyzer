import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI_Dir/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2023");

    const filteredExpense = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    const filterExpenseYear = (year) => {
        setFilterYear(year);
    };

    const removeExpense = (eId) => {
        props.removeExpense(eId);
    };

    return (
        <Card className="container">
            <ExpenseFilter
                selected={filterYear}
                selectedYear={filterExpenseYear}
            />
            <ExpenseChart expenses={filteredExpense} />
            <ExpenseList data={filteredExpense} removeExpense={removeExpense} />
        </Card>
    );
}
