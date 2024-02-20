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