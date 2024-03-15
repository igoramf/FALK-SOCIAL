import api from "@/app/_utils/api"

export const createPost = async ( data, file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('createdBy', data.createdBy);
    formData.append('text', data.text)
    if(data.community){
        formData.append('community')
    }


    const response = await api.post(
        '/post/create',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )

    return response;
}

export const getAllPost = async (token) => {
    const response = await api.get(
        "/post",
        null,
        {
            headers: { authorization: token },
        }
    )

    return response
}

export const likePost = async ( token, postId, data ) => {
    const response = await api.put(
        `/post/like/${postId}`,
        data,
        {
            headers: { authorization: token },
        }
    )

    return response
}