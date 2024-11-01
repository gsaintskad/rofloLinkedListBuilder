import ListNode from "./ListNode.tsx";
import { Node, HandledNode } from "./LinkedList.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EdgeProps<T extends number | string> {
  parent: HandledNode<T>;
  child: HandledNode<T>;
  id: string;
  angle?: number;
}

export const Edge = <T extends number | string>(props: EdgeProps<T>) => {
  return (
    <div
      className={"h-full content-center"}
      // style={{ transform: `rotate(${props.angle}deg)` }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className={"w-20 h-2 bg-white -translate-y-0.5"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            Edge ({props.parent.value + " - " + props.child.value})
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Parent: {props.parent.value}</DropdownMenuItem>
          <DropdownMenuItem>Child: {props.child.value}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
