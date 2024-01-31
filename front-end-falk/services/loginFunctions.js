import api from "@/app/api/api"

export const login = async (email , password) => {
    
    const response = await api.post(
        '/login',
        {email, password}
    )


    return response
}

export const register = async ( data ) => {
    const response = await api.post(
        '/register',
        data
    )

    return response;
}

export const logout = async ( token, userId ) => {
    const response = await api.patch(
        `/signOut?idUser=${userId}`,null, {
            headers: { authorization: token },
        }
    )

    return response
}