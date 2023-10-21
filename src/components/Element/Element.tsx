import { Item } from "../../types/items";

interface Props {
  index: number;
  item: Item;
  onInputChange: (index: number, checked: boolean) => void;
}

export default function Element({ index, item, onInputChange }: Props) {
  return (
    <div className="element" key={index}>
      <input
        type="checkbox"
        checked={item.selected}
        onChange={(e) => onInputChange(index, e.target.checked)}
        id={"in-" + index}
      />
      <label htmlFor={"in-" + index}>{item.value}</label>
    </div>
  );
}
