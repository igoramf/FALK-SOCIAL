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