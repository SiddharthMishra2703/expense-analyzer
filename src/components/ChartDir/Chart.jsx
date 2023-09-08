import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const allAmounts = props.dataPoints.map((amount) => amount.value);
    const maxAmount = Math.max(...allAmounts);

    return (
        <div className="chart-container">
            {props.dataPoints.map((point) => {
                return (
                    <ChartBar
                        key={point.label}
                        label={point.label}
                        value={point.value}
                        maxValue={maxAmount}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
