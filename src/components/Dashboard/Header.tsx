import React from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useNavigate } from "react-router-dom"
import { toast } from "../ui/use-toast"
import { AddTodo, GetTodos } from "@/api/TodoCrud"

export default function Header() {

  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("uid")
    navigate('/')
    toast({
      title: "Logout Successful"
    })
  }

  return (
 <div className="bg-black w-full px-4 py-8 md:flex justify-around">
    <h2 className="text-3xl text-white mb-4">Todo App</h2>
    <div className="w-[220px]">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={GetTodos}>Todos</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={() => AddTodo({title: "this is a title", description: "this is a description", created: (new Date()).toISOString().split('T')[0]})}>Create</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={handleLogout}>Logout</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
    </div>
 </div>
  )
}
