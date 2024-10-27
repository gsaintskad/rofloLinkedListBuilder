import { LinkedList } from "./LinkedList";
import { Edge } from "@/Edge.tsx";
import ListNode from "./ListNode";
import { useState } from "react";
import { node } from "globals";
const LinkedListComp = () => {
  // const list:LinkedList<number>=new LinkedList<number>([1,2,3,45]);
  // console.log(list.toArray());

  const [nodeArr, setNodeArr] = useState(
    new LinkedList<number>([1, 2, 3, 45]).toArray(),
  );
  return (
    <div className={"flex bg-gray-800 w-full h-1/2"}>
      {nodeArr.map((nd, i) => {
        return (
          <>
            <ListNode node={nd} key={i} nextNode={nodeArr[i + 1]} />
            {i+1===nodeArr.length?'':<Edge parent={nd} key={i+10} child={nodeArr[i + 1]} />}
          </>
        );
      })}
    </div>
  );
};

export default LinkedListComp;
