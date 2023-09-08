import "./Card.css";

export default function Card(props) {
    let classes = props.className + " card";

    return <div className={classes}>{props.children}</div>;
}
