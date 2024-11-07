import React from "react";
import { HandledNode } from "@/LinkedList.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

interface ListNodeProps<T extends number | string> {
  node: HandledNode<T>;
  nextNode: HandledNode<T>;
  state?: "primary" | "secondary" | "danger";
  id: string;
}

const ListNode = <T extends number | string>(
  props: ListNodeProps<T>,
): JSX.Element => {
  const colorClasses = {
    primary: "bg-blue-500",
    secondary: "bg-green-500",
    danger: "bg-red-500",
  };
  return (
    <div className={"h-full content-center"}>
      <DropdownMenu>
        <DropdownMenuTrigger className={"h-1/5 z-20"}>
          <div
            className={` ${colorClasses[props.state!] || colorClasses.primary} aspect-square rounded-full outline outline-4 outline-white -translate-y-0.5  h-full flex items-center justify-center`}
          >
            <h1 className={"text-fluid text-white"}>
              {props.node.value.toString()}
            </h1>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            Node : {props.node!.value.toString()}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Next Node :{" "}
            {props.nextNode?.value.toString()
              ? props.nextNode.value?.toString()
              : "null"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ListNode;
