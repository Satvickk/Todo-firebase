import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCard from "./Card";
import { GetTodos } from "@/api/TodoCrud";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { setTodos } from "@/features/todoSlice";

function Body() {

  const dispatch = useAppDispatch()
  const Todos = useAppSelector((state) => state.Todo)

  interface ITodo {
    docId: string,
    created: string,
    description: string,
    title: string
  }

 const getAllTodos = async () => {
  const resp: Array<ITodo> = await GetTodos()
  // console.log('resp',resp)
  dispatch(setTodos(resp))
 }

useEffect(()=>{
  getAllTodos()
},[])

  return (
    <>
    {Todos.length > 0 ? 
        <ScrollArea className="h-full w-full">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3">
          {Todos.length > 0 && Todos.map((item : ITodo) => 
              <TodoCard
                key={item.docId}
                id={item.docId}
                title={item.title}
                description={item.description}
                created={item.created}
              />
          )}
        </div>
      </ScrollArea> :
      "No Todos Available now :(  Please create Some new Todos"}
    </>
  );
}

export default Body;
