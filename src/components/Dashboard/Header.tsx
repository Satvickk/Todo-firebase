import React, {useRef} from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useNavigate } from "react-router-dom"
import { toast } from "../ui/use-toast"
import { AddTodo, GetTodos } from "@/api/TodoCrud"
import TodoForm from "./Form"

export default function Header() {

  const [isOpen, setIsOpen] = React.useState(false)
  const navigate = useNavigate()
  function handleLogout() {
    localStorage.removeItem("uid")
    navigate('/')
    toast({
      title: "Logout Successful"
    })
  }

  function handleFormOpen () {
    setIsOpen(!isOpen)
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
        <MenubarTrigger onClick={handleFormOpen}>Create</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={handleLogout}>Logout</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
    <TodoForm isOpen={isOpen} isOpenChange={handleFormOpen}/>
    </div>
 </div>
  )
}
