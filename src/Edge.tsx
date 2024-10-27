import ListNode from "./ListNode.tsx";
import { Node } from "./LinkedList.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EdgeProps<T extends number | string> {
  parent: T;
  child: T;
}

export const Edge = <T extends number | string>(props :EdgeProps<T>) => {
  return (
    <div className={"h-full content-center"}>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className={"w-20 h-2 bg-white -translate-y-0.5"}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Edge ({props.parent +" - "+ props.child})</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>NodeA: {props.parent}</DropdownMenuItem>
          <DropdownMenuItem>NodeB: {props.child}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
