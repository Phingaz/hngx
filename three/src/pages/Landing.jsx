import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import { images } from "../t";

export const Landing = () => {
  const [items, setItems] = useState(images);

  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  return (
    <div className="h-screen w-screen bg-blue-300">
      <SortableList
        onSortEnd={onSortEnd}
        className="select-none grid grid-cols-3 gap-3 bg-red-200 h-[80%] w-[90%] mx-auto"
        draggedItemClassName="bg-green-200"
      >
        {items.map((item) => (
          <SortableItem key={item.id}>
            <div className={`${item.color} select-none`}>
              <img src={item.url} className="pointer-events-none" />
              {item.name}
            </div>
          </SortableItem>
        ))}
      </SortableList>
    </div>
  );
};