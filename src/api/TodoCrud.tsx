import { Firestore } from "@/Firebase/Firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

interface IPayload {
    title: string;
    description: string;
    created: string;
}

export const AddTodo = async (payload: IPayload) => {
    const id = localStorage.getItem('uid');
    if (!id) {
        console.error("User ID not found in localStorage");
        return;
    }

    try {
        const documentRef = collection(Firestore, "users", `${id}/todos`);
        const resp = await addDoc(documentRef, payload);
        if (resp) {
            return { ...payload, docId: resp.id };
        }
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

export const UpdateTodo = async (payload: IPayload, docId: string) => {
    const id = localStorage.getItem('uid');
    if (!id) {
        console.error("User ID not found in localStorage");
        return;
    }

    try {
        const documentRef = doc(Firestore, "users", `${id}/todos/${docId}`);
        await updateDoc(documentRef, payload);
        return { ...payload, docId };
    } catch (error) {
        console.error("Error updating document:", error);
    }
};

interface IGetTodo {
    title: string;
    created: string;
    description: string;
    docId: string;
}

export const GetTodos = async (): Promise<IGetTodo[]> => {
    const id = localStorage.getItem('uid');
    if (!id) {
        console.error("User ID not found in localStorage");
        return [];
    }

    try {
        const documentRef = collection(Firestore, "users", `${id}/todos`);
        const resp = await getDocs(documentRef);

        if (!resp.empty) {
            const data: IGetTodo[] = [];
            resp.forEach((item) => {
                const todoData = { docId: item.id, ...item.data() } as IGetTodo;
                data.push(todoData);
            });
            return data;
        } else {
            console.log("No todos found");
            return [];
        }
    } catch (error) {
        console.error("Error getting documents:", error);
        return [];
    }
};

export const DeleteTodos = async (docId: string) => {
    const id = localStorage.getItem('uid');
    if (!id) {
        console.error("User ID not found in localStorage");
        return false;
    }

    try {
        const documentRef = doc(Firestore, "users", `${id}/todos/${docId}`);
        await deleteDoc(documentRef);
        return true;
    } catch (error) {
        console.error("Error deleting document:", error);
        return false;
    }
};
