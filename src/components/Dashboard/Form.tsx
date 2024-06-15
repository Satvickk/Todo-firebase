import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddTodo, UpdateTodo } from "@/api/TodoCrud";
import { useAppDispatch } from "@/features/hooks";
import { addTodo, updateTodo } from "@/features/todoSlice";

const formSchema = z.object({
  title: z.string().nonempty("Title is required"),
  description: z.string().nonempty("Description is required")
});

interface TodoFormProps {
  isOpen: boolean;
  isOpenChange: () => void;
  isEdit?: boolean;
  docId?: string;
  title?: string;
  description?: string;
}

const TodoForm: React.FC<TodoFormProps> = ({ isOpen, isOpenChange, isEdit = false, docId = "", title = "", description = "" }) => {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title,
      description,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!isEdit) {
      const resp = await AddTodo({
        ...values,
        created: new Date().toISOString().split('T')[0]
      });
      if (resp) dispatch(addTodo(resp));
    } else {
      const resp = await UpdateTodo({
        ...values,
        created: new Date().toISOString().split('T')[0]
      }, docId);
      if (resp) dispatch(updateTodo(resp));
    }
    form.reset();
    isOpenChange();
  };

  return (
    <Dialog open={isOpen} onOpenChange={isOpenChange} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Todo" : "Create Todo"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Description"
                      className="flex h-52 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{isEdit ? "Apply Changes" : "Create"}</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoForm;
