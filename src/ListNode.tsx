import React from "react";

interface ListNodeProps<T extends number | string> {
  value: T;
}

const ListNode = <T extends number | string>(
  props: ListNodeProps<T>,
): JSX.Element => {
  return (
    <div
      className={
        "aspect-square rounded-full bg-green-800 h-1/6 flex items-center justify-center text-white text-4xl"
      }
    >
      {props.value.toString()}
    </div>
  );
};
export default ListNode;
