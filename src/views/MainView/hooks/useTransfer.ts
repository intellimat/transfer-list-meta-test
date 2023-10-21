import { Item } from "../../../types/items";
import { useState } from "react";

const useTransfer = (mappedItems: Item[]) => {
  const [leftListItems, setLeftListItems] = useState<Item[]>(mappedItems);
  const [rightListItems, setRightListItems] = useState<Item[]>([]);

  const updateLeftListItems = (index: number, checked: boolean) => {
    const newLeftListItems = Array.from(leftListItems);
    newLeftListItems[index].selected = checked;
    setLeftListItems(newLeftListItems);
  };

  const updateRightListItems = (index: number, checked: boolean) => {
    const newRightListItems = Array.from(rightListItems);
    newRightListItems[index].selected = checked;
    setRightListItems(newRightListItems);
  };

  const moveItemsToLeftList = () => {
    const movingItems = rightListItems.reduce(
      (acc: { left: Item[]; right: Item[] }, item) => {
        if (item.selected) {
          const resetItem = { ...item, selected: false };
          acc.left.push(resetItem);
          return acc;
        }
        acc.right.push({ ...item });
        return acc;
      },
      { left: [], right: [] }
    );
    setRightListItems(movingItems.right);
    setLeftListItems((prev) => [...prev, ...movingItems.left]);
  };

  const moveItemsToRightList = () => {
    const movingItems = leftListItems.reduce(
      (acc: { left: Item[]; right: Item[] }, item) => {
        if (item.selected) {
          const resetItem = { ...item, selected: false };
          acc.right.push(resetItem);
          return acc;
        }
        acc.left.push({ ...item });
        return acc;
      },
      { left: [], right: [] }
    );
    setLeftListItems(movingItems.left);
    setRightListItems((prev) => [...prev, ...movingItems.right]);
  };

  return {
    leftListItems,
    rightListItems,
    updateLeftListItems,
    updateRightListItems,
    moveItemsToLeftList,
    moveItemsToRightList,
  };
};

export default useTransfer;
