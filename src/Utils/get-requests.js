import axios from "axios"


export const handleGetApi = async (url) => {
    try {
        const res = await axios.get(url)
        if (res.status === 200 || res.status === 201) {
            return {
                data: res.data,
                error: false,
                msg: "Data retrieved",
            }
        }
    } catch (err) {
        return {
            data: false,
            error: err,
            msg: "Unexpected Error Ocurred",
        }
    }

}

