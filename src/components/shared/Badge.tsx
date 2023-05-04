import "./badge.css";
const Badge = (props:any) => {
  return (
    <div className="badge">
      <div>{props.items}</div>
    </div>
  );
};

export default Badge;
