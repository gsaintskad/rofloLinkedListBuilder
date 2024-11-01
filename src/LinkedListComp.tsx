import { LinkedList, HandledNode } from "./LinkedList";
import ShortUniqueId from 'short-unique-id';

import { Edge } from "@/Edge.tsx";
import ListNode from "./ListNode";
import { useState } from "react";
import React from 'react';

const LinkedListComp = () => {
  // const list:LinkedList<number>=new LinkedList<number>([1,2,3,45]);
  // console.log(list.toArray());

  const [nodeArr, setNodeArr] = useState(
    new LinkedList<number>([1, 2, 3, 45,5832,1233,5510,123]).toArray());
  return (
    <div className={"flex bg-gray-800 w-full h-full"} key={"GRAPH-"+nodeArr[0].id}>
      {nodeArr.map((nd, i) => {
        return (
          <React.Fragment key={`REACT.FRAGMENT-${nd.id}`}>
            <ListNode node={nd} key={`NODE-${nd.id}`} id={nd.id} nextNode={nodeArr[i + 1]} />
            {i+1===nodeArr.length?'':<Edge parent={nd} key={`EDGE-${nd.id}///${nodeArr[i+1].id}`} id={`${nd.id}///${nodeArr[i+1].id}`}  angle={i*15} child={nodeArr[i + 1]} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LinkedListComp;
