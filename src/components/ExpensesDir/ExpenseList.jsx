import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    if (props.data.length === 0) {
        return <h2 className="no-element">Found no expenses.</h2>;
    }

    const removeExpense = (eId) => {
        props.removeExpense(eId);
    };

    return (
        <ul className="expense-list">
            {props.data.map((ele) => {
                return (
                    <ExpenseItem
                        key={ele.id}
                        title={ele.title}
                        amount={ele.amount}
                        date={ele.date}
                        id={ele.id}
                        removeExpense={removeExpense}
                    />
                );
            })}
        </ul>
    );
};

export default ExpenseList;
