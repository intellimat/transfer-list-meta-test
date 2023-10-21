import ListBox from "../../components/ListBox/ListBox";
import { items } from "../../../data";
import "./MainView.scss";
import useTransfer from "./hooks/useTransfer";
import { Item } from "../../types/items";

const mappedItems: Item[] = items.map((item) => ({
  value: item,
  selected: false,
}));

export default function MainView() {
  const {
    leftListItems,
    rightListItems,
    updateLeftListItems,
    updateRightListItems,
    moveItemsToLeftList,
    moveItemsToRightList,
  } = useTransfer(mappedItems);

  return (
    <div className="container">
      <ListBox
        items={leftListItems}
        onInputChange={updateLeftListItems}
      ></ListBox>
      <div className="container-buttons">
        <button onClick={moveItemsToLeftList}>&lt;</button>
        <button onClick={moveItemsToRightList}>&gt;</button>
      </div>
      <ListBox
        items={rightListItems}
        onInputChange={updateRightListItems}
      ></ListBox>
    </div>
  );
}
