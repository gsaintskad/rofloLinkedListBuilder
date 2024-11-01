import LinkedListComp from "./LinkedListComp.tsx";
import {Edge} from "@/Edge.tsx";
import {LinkedList} from "@/LinkedList.ts";
function App() {
  const mylist=new LinkedList<number>([1, 2, 4,5,6]);
  mylist.someAlgorithm();
  console.log(mylist)
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <LinkedListComp list={mylist}/>
    </div>
  );
}

export default App;
