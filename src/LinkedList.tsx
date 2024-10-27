import LinkedList from './LinkedList';
import ListNode from './ListNode';
const LinkedListComp=()=>{
  return <div className={"flex bg-gray-800 w-full h-1/2"}>
    <ListNode value={5}/>
    <h1 className={"text-4xl h-1/6 flex justify-center items-center text-white"}>{"->"}</h1>
    <ListNode value={5}/>
    <h1 className={"text-4xl h-1/6 flex justify-center items-center text-white"}>{"->"}</h1>
    <ListNode value={5}/>
  </div>
}


export default LinkedListComp