import api from "@/app/_utils/api"

export const createPost = async (token, data) => {
    
    const response = await api.post(
        '/post/create',
        data,
        {
            headers: { authorization: token },
        }
    )

    return response;
}

export const getAllPost = async (token) => {
    const response = await api.get(
        "/post/",
        null,
        {
            headers: { authorization: token },
        }
    )

    return response
}