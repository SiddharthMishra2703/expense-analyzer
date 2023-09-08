import "./ExpenseDate.css";

export default function ExpenseDate(props) {
    const d = props.date;
    const date = d.getDate();
    const month = d.toLocaleString("en-US", { month: "long" });
    const year = d.getFullYear();
    return (
        <div className="date-container">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="date">{date}</div>
        </div>
    );
}
