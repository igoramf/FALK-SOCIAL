import api from "@/app/_utils/api"

export const createCommunity = async (token, data) => {
    try {
        const response = api.post("/community", data, {
            headers: { authorization: token },
        })
        return response
    } catch (error) {
        return null
    }
}

export const getAllCommunity = async(token, date) => {
    const response = await api.get(
        "/community",
        null,
        {
            headers: { authorization: token },
        }
    )

    return response
}