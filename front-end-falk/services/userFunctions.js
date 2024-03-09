import api from "@/app/_utils/api"



export const getUser = async (username) => {
    const response = await api.get(
        `/user/${username}`,
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


export const uploadProfilePic = async (file, idUser) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('idUser', idUser);

        const response = await api.post(
            '/user/upload-profile-pic',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        return response;
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        return null
    }
};