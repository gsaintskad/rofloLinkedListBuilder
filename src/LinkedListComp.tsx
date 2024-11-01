import { LinkedList, HandledNode } from "./LinkedList";
import { Edge } from "@/Edge.tsx";
import ListNode from "./ListNode";
import { useEffect, useState } from "react";
import React from "react";

import {node} from "globals";

interface LLComp<T extends number | string> {
  list: LinkedList<T>;
}

const LinkedListComp = <T extends number | string>(props: LLComp<T>) => {
  const [nodeArr, setNodeArr] = useState(props.list.toArray());
  const [iterationStory, setIterationStory] = useState<string[]>(
    props.list.iterationStory,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    console.log(
      `actual index ${currentIndex} :${iterationStory[currentIndex]}`,
    );
    if (currentIndex < iterationStory.length) {
      // Set a timer to update the node state based on iterationStory
      const timer = setTimeout(() => {
        const newStoryAction = iterationStory[currentIndex];

        // Process the action in iterationStory[currentIndex]
        const updatedNodes = nodeArr.map((node) => {
          if (newStoryAction.includes(node.id)) {
            // Example: Add logic to change node state based on iterationStory
            return { ...node, state: "danger" }; // Assuming `active` as a sample property
          }
          return { ...node, state: "primary" };
        });

        // Update the node array and move to the next story item
        setNodeArr(updatedNodes as HandledNode<T>[]);
        setCurrentIndex((prevIndex) => prevIndex + 1);

        if (currentIndex === iterationStory.length-1) {
          setTimeout(()=>{
            const updatedNodes = nodeArr.map((node,i)=>{

              return { ...node, state: "primary" };
            });
            setNodeArr(updatedNodes as HandledNode<T>[]);
            },1000)

        }
      }, 100); // Adjust the interval as needed
      return () => {
        clearTimeout(timer);
      }; // Cleanup the timer
    }
  }, [currentIndex, iterationStory, nodeArr]);
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
              state={nd.state!}
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
