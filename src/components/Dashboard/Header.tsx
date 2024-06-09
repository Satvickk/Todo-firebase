import React from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useNavigate } from "react-router-dom"

export default function Header() {

  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem("token")
    navigate('/')
  }

  return (
 <div className="bg-black w-full px-4 py-8 md:flex justify-around">
    <h2 className="text-3xl text-white mb-4">Todo App</h2>
    <div className="w-[220px]">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Todos</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Create</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={handleLogout}>Logout</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
    </div>
 </div>
  )
}
