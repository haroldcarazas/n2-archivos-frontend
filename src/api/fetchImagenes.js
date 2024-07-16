import axiosInstace from "./axiosInstance"

export const subirImagen = async (data) => {
    const res = await axiosInstace.post('/api/imagenes', data)
    return res.data
}