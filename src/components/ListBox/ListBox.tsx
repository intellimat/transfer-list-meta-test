import { Item } from "../../types/items";
import Element from "../Element/Element";
import "./ListBox.scss";

interface Props {
  items: Item[];
  onInputChange: (index: number, checked: boolean) => void;
}

export default function ListBox({ items, onInputChange }: Props) {
  return (
    <div className="listbox">
      {items.map((item, index) => (
        <Element index={index} item={item} onInputChange={onInputChange} />
      ))}
    </div>
  );
}
