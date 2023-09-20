/* eslint-disable react/prop-types */
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";
import { useContext } from "react";
import Main from "../../Contex";

export const ImagesList = () => {
  const { items, setItems } = useContext(Main);

  const onSortEnd = (oldIndex, newIndex) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  return (
    <SortableList
      onSortEnd={onSortEnd}
      className="select-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 min-h-[80%] w-full"
      draggedItemClassName="opacity-50 cursor-grabbing"
    >
      {items?.map((item) => (
        <SortableItem key={item.id}>
          <div
            className={`bg-stone-100 cursor-grab select-none flex flex-col gap-2 items-center p-3 rounded-xl b`}
          >
            <img
              src={item.url}
              className="pointer-events-none w-full h-[80%] object-center object-fill rounded-xl"
            />
            <div className="flex justify-start items-center w-full gap-1 flex-wrap">
              <p className="text-sm font-bold">Tags:</p>
              {item?.tag?.map((el, i) => (
                <p key={i} className="t italic text-sm font-semibold">
                  {el}
                </p>
              ))}
            </div>
          </div>
        </SortableItem>
      ))}
    </SortableList>
  );
};
