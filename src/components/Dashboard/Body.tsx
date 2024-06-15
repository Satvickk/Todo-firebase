import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCard from "./Card";
import { useAppSelector } from "@/features/hooks";
import { RootState } from "@/features/store/store";  // Assuming you have a RootState defined in your store

import { GetTodos } from "@/api/TodoCrud";
import { setTodos } from "@/features/todoSlice";
import { useAppDispatch } from "@/features/hooks";


export default function Body() {

  const dispatch = useAppDispatch()
  const Todos = useAppSelector((state: RootState) => state.Todo);

  interface ITodo {
    docId: string;
    created: string;
    description: string;
    title: string;
  }

  const getAllTodos = async () => {
    if(Todos.length === 0){
      try {
        const resp: Array<ITodo> = await GetTodos();
        dispatch(setTodos(resp))     
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  useEffect(() => {
    getAllTodos()
  }, [])

  return (
    <>
      {Todos.length > 0 ? (
        <ScrollArea className="h-full w-full">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3">
            {Todos.map((item: ITodo) => (
              <TodoCard
                key={item.docId}
                id={item.docId}
                title={item.title}
                description={item.description}
                created={item.created}
              />
            ))}
          </div>
        </ScrollArea>
      ) : (
        <p className="mx-4 text-wrap">No Todos Available now :(  Please create some new Todos</p>
      )}
    </>
  );
}


