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
    <Card className="bg-white w-[300px] text-wrap m-4">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card created Date</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester. And then, one day, the people of the kingdom
          discovered that the jokes left by Jokester were so funny that they
          couldn't help but laugh. And once they started laughing, they couldn't
          stop.
        </p>
      </CardContent>
      <CardFooter className="gap-3">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default TodoCard;
