import api from "@/app/api/api"

export const login = async (email , password) => {
    
    const response = await api.post(
        '/login',
        {email, password}
    )


    return response
}