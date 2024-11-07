import { LinkedList, HandledNode } from "./LinkedList";
import { Edge } from "@/Edge.tsx";
import ListNode from "./ListNode";
import { useEffect, useState } from "react";
import React from "react";

interface LLComp<T extends number | string> {
  list: LinkedList<T>;
}
type nodeState = "primary" | "secondary" | "danger";

const LinkedListComp = <T extends number | string>(props: LLComp<T>) => {
  const [nodeArr, setNodeArr] = useState(props.list.toArray());
  const [iterationStory, setIterationStory] = useState<string[]>(
    props.list.iterationStory,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const startAnimationHandler =async  () => {
    setCurrentIndex(0); // Reset to start from the beginning each time

    const animate = (index: number) => {
      if (index < iterationStory.length) {
        const newStoryAction = iterationStory[index];

        // Update node states based on the current action
        const updatedNodes = nodeArr.map((node) => {
          if (newStoryAction.includes(node.id)) {
            return { ...node, state: "danger" };
          }
          return { ...node, state: "primary" };
        });

        setNodeArr(updatedNodes as HandledNode<T>[]);
        setCurrentIndex(index + 1);

        // Set the timeout for the next iteration
        setTimeout(() => animate(index + 1), 500);
      } else {
        // Reset node states to "primary" after the last animation step
        setTimeout(() => {
          const resetNodes = nodeArr.map((node) => ({
            ...node,
            state: "primary",
          }));
          setNodeArr(resetNodes as HandledNode<T>[]);
        }, 1000);
      }
    };

    animate(0); // Start the animation from the first index
  };

  return (
    <div
      className={"flex bg-gray-800 w-full h-full justify-center items-center"}
      key={"GRAPH-" + nodeArr[0].id}
    >
      <button
        className={"bg-green-700 text-white h-1/5 m-6 text-4xl rounded-xl p-3"}
        onClick={startAnimationHandler}
      >
        Start Animation
      </button>
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
