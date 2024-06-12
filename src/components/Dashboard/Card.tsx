import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TodoForm from "./Form";
import { DeleteTodos } from "@/api/TodoCrud";
import { toast } from "../ui/use-toast";
import { useAppDispatch } from "@/features/hooks";
import { deleteTodo } from "@/features/todoSlice";

interface TodoCardProps {
  id: string;
  title: string;
  description: string;
  created: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ id, title, description, created }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch()
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async (id : string) => {
    const resp = await DeleteTodos(id)
    if(resp){
      dispatch(deleteTodo(id))
      toast({description: "Todo deleted successfully"})
    }
  }

  return (
    <>
      <Card className="bg-white min-w-[300px] text-wrap m-4" id={id}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{created}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="gap-3">
          <Button onClick={handleIsOpen}>Edit</Button>
          <Button variant="destructive" onClick={() => handleDelete(id)}>Delete</Button>
        </CardFooter>
      </Card>
      <TodoForm
        isOpen={isOpen}
        isOpenChange={handleIsOpen}
        title={title}
        description={description}
        isEdit={true}
        docId={id}
      />
    </>
  );
};

export default TodoCard;
