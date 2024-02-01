import api from "@/app/_utils/api"

export const createComment = async (token, data) => {
    
    const response = await api.post(
        '/comment',
        data,
        {
            headers: { authorization: token },
        }
    )

    return response;
}


export const deleteComment = async (token, commentId) => {
    
    const response = await api.delete(
        `/comment/${commentId}`,
        {
            headers: { authorization: token },
        }
    )

    return response;
}