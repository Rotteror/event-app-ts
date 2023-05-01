import "./customSelect.css";

type Props<Value> = {
  value: Value;
  onChange: (newValue: Value) => void;
  options: string[];
};

const CustomSelect = <T extends string | number | readonly string[]>({
  value,
  onChange,
  options,
}: Props<T>) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(e) => {
        onChange(e.target.value as T);
      }}
    >
      {options.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
