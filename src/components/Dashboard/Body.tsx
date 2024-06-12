import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCard from "./Card";
import { GetTodos } from "@/api/TodoCrud";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { setTodos } from "@/features/todoSlice";
import { RootState } from "@/features/store/store";  // Assuming you have a RootState defined in your store

interface ITodo {
  docId: string;
  created: string;
  description: string;
  title: string;
}

function Body() {
  const dispatch = useAppDispatch();
  const Todos = useAppSelector((state: RootState) => state.Todo);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllTodos = async () => {
    try {
      console.log("brfore resp")
      const resp: Array<ITodo> = await GetTodos();
      console.log("after resp", resp)
      dispatch(setTodos(resp));
      setLoading(false);
    } catch (err) {
      setError("Failed to load todos");
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("working get all api")
    getAllTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
        "No Todos Available now :(  Please create some new Todos"
      )}
    </>
  );
}

export default Body;
