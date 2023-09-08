import Expenses from "./components/ExpensesDir/Expenses";
import NewExpense from "./components/NewExpenseDir/NewExpense";
import { useState } from "react";

const Demo_Expenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28)
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12)
    }
];

function App() {
    const [expenses, setExpenses] = useState(Demo_Expenses);

    const saveExpense = (newExpense) => {
        setExpenses((prevValue) => {
            return [newExpense, ...prevValue];
        });
    };

    const removeExpense = (eId) => {
        // console.log(eId);
        setExpenses((prevValue) => {
            return prevValue.filter((ele) => ele.id !== eId);
        });
    };

    return (
        <div>
            <NewExpense saveExpense={saveExpense} />
            <Expenses data={expenses} removeExpense={removeExpense} />
        </div>
    );
}

export default App;
