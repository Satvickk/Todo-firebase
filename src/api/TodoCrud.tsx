import { Firestore } from "@/Firebase/Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const id = localStorage.getItem('uid')

interface IPayload {
    title : string,
    description : string,
    created : string
}
export const AddTodo = async(payload: IPayload) => {
    try {
        const documentRef = collection(Firestore, "users", `${id}/todos`)
        const resp = await addDoc(documentRef, payload)
        if(resp){
            return payload
        }
    } catch (error) {
        console.log("Error ::", error)
    }
}


interface IGetTodo {
    docId : string,
    title: string,
    created: string,
    description : string
}


export const GetTodos = async() => {
    try {
        const documentRef = collection(Firestore, "users", `${id}/todos`)
        const resp = await getDocs(documentRef)
        if(resp){
            const data : Array<IGetTodo> = []
            resp.forEach((item) => data.push({docId: item.id, ...item.data()}))
            return data
        }
    } catch (error) {
        console.log("Error ::", error)
    }
}

// export const GetTodos = async() => {
//     try {
//         const documentRef = collection(Firestore, "users", `${id}/todos`)
//         const resp = await getDocs(documentRef)
//         if(resp){
//             console.log(resp.data())
//             return resp.data()
//         }
//     } catch (error) {
//         console.log("Error ::", error)
//     }
// }