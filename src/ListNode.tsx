import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";


interface ListNodeProps<T extends number | string> {
  node: T;
  nextNode: T;
}

const ListNode = <T extends number | string>(
  props: ListNodeProps<T>,
): JSX.Element => {
  return (
    <div className={"h-full content-center"}>
      <DropdownMenu>
        <DropdownMenuTrigger className={'h-1/5 z-20'}>
          <div
            className={
              "aspect-square rounded-full bg-green-800 h-full flex items-center justify-center text-white text-4xl"
            }
          >
            {props.node.toString()}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Node : {props.node!.toString()}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Next Node : {props.nextNode?.toString()?props.nextNode?.toString():"null"}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ListNode;
