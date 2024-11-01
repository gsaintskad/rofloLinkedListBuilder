import { LinkedList, HandledNode } from "./LinkedList";
import { Edge } from "@/Edge.tsx";
import ListNode from "./ListNode";
import { useState } from "react";
import React from "react";

interface LLComp<T extends number|string> {
  list: LinkedList<T>;
}

const LinkedListComp =<T extends number|string>(props:LLComp<T>) => {


  const [nodeArr, setNodeArr] = useState(
    props.list.toArray(),
  );
  return (
    <div
      className={"flex bg-gray-800 w-full h-full"}
      key={"GRAPH-" + nodeArr[0].id}
    >
      {nodeArr.map((nd, i) => {
        return (
          <React.Fragment key={`REACT.FRAGMENT-${nd.id}`}>
            <ListNode
              node={nd}
              key={`NODE-${nd.id}`}
              id={nd.id}
              nextNode={nodeArr[i + 1]}
            />
            {i + 1 === nodeArr.length ? (
              ""
            ) : (
              <Edge
                parent={nd}
                key={`EDGE-${nd.id}///${nodeArr[i + 1].id}`}
                id={`${nd.id}///${nodeArr[i + 1].id}`}
                angle={i * 15}
                child={nodeArr[i + 1]}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LinkedListComp;
