import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        date: ""
    });

    const onChangeHandeler = (name, value) => {
        setFormData((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    };

    const addExpenseHandeler = (e) => {
        e.preventDefault();
        const data = {
            date: new Date(formData.date),
            title: formData.title,
            amount: parseInt(formData.amount)
        };

        props.sendExpense(data);

        setFormData({
            title: "",
            amount: "",
            date: ""
        });

        props.closeForm();
    };

    const cancelButtonHandeler = (e) => {
        e.preventDefault();
        props.closeForm();

        setFormData({
            title: "",
            amount: "",
            date: ""
        });
    };

    return (
        <form className="expense-form">
            <div className="form-controls">
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            onChangeHandeler("title", e.target.value);
                        }}
                        value={formData.title}
                    />
                </div>
                <div>
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        onChange={(e) => {
                            onChangeHandeler("amount", e.target.value);
                        }}
                        value={formData.amount}
                    />
                </div>
                <div>
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        onChange={(e) => {
                            onChangeHandeler("date", e.target.value);
                        }}
                        value={formData.date}
                    />
                </div>
            </div>
            <div className="form-buttons">
                <button onClick={cancelButtonHandeler}>Cancel</button>
                <button onClick={addExpenseHandeler}>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
