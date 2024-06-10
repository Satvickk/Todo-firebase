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

function TodoCard() {
  return (
    <Card className="bg-white min-w-[300px] text-wrap m-4">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card created Date</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          stop.
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
