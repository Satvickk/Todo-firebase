import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Auth } from '@/Firebase/Firebase'


const GoogleProvider = new GoogleAuthProvider()

export const CreateUser = async(email : string, password : string) => {
    try {
        const resp = await createUserWithEmailAndPassword(Auth, email, password )
        await localStorage.setItem('uid', `${resp.user?.uid}`)
        return {value: true, data: resp.user}
    } catch (error) {
        console.log("Error ::", error)
        return {value: false, message: error}
    }

}

export const LoginUser = async(email : string, password : string) => {
    try {
        const resp = await signInWithEmailAndPassword(Auth, email, password )
        localStorage.setItem('uid', `${resp.user?.uid}`)
        // console.log("uid in userauth:",localStorage.getItem('uid'))
        return {value: true, data: resp.user}
    } catch (error) {
        console.log("Error ::", error)
        return {value: false, message: error}
    }

}

export const createUserWithGoogle = async() => {
    try {
        const resp = await signInWithPopup(Auth, GoogleProvider)
        await localStorage.setItem('uid', `${resp.user?.uid}`)
        return {value: true, data: resp.user}
    } catch (error) {
        console.log("Error ::", error)
        return {value: false, message: error}
    }

}