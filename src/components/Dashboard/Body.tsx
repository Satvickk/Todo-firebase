import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCard from "./Card";
import { useAppSelector } from "@/features/hooks";
import { RootState } from "@/features/store/store";  // Assuming you have a RootState defined in your store

interface ITodo {
  docId: string;
  created: string;
  description: string;
  title: string;
}

function Body() {
  const Todos = useAppSelector((state: RootState) => state.Todo);

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
