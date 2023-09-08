import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const currnetYear = new Date().getFullYear();
    const totalYears = [1, 2, 3, 4, 5];

    const selectedYearHandeler = (e) => {
        props.selectedYear(e.target.value);
    };

    return (
        <div className="expense-filter">
            <label>Filter by year</label>
            <select onChange={selectedYearHandeler} value={props.selected}>
                {totalYears.map((year) => {
                    return (
                        <option key={year} value={currnetYear - year + 1}>
                            {currnetYear - year + 1}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default ExpenseFilter;
