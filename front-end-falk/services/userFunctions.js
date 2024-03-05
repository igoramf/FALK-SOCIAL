import api from "@/app/_utils/api"


export const getUser = async (id) => {
    const response = await api.get(
        `/user/${id}`,
        null
    )

    return response
}

export const getUserPosts = async (id) => {
    const response = await api.get(
        `/post/user/${id}`
    )

    return response
}