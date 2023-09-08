import "./ChartBar.css";

const ChartBar = (props) => {
    let fill = {
        height: 0
    };
    if (props.value !== 0) {
        fill.height = Math.round((props.value * 100) / props.maxValue) + "%";
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div style={fill}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
