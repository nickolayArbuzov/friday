import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    registration(email: string, password: string){
        return instance.post('auth/register', {email, password})
    },
    checkAuth(){
        return instance.post('auth/me', {})
    },
    updateAuth(){

    },
    logout(){
        return instance.delete('auth/me', {})
    },
    recoverPass(){

    },
    updatePass(){
        
    }
}

export const userAPI = {
    getUsers(){
        return instance.get('social/users')
    }
}