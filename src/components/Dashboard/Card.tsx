import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

function TodoCard({id, title, description, created} : {id: string, title: string, description: string, created: string}) {
  return (
    <Card className="bg-white min-w-[300px] text-wrap m-4" id={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{created}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {description}
        </p>
      </CardContent>
      <CardFooter className="gap-3">
        <Button>Edit</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default TodoCard;
