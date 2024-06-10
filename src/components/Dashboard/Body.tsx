import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCard from "./Card";

function Body() {
  return (
    <ScrollArea className="h-full w-full">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      </div>
    </ScrollArea>
  );
}

export default Body;
