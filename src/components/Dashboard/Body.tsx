import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoCard from "./Card";

function Body() {
  return (
    <ScrollArea className="h-full w-full sm:grid">
      <div className="">
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
