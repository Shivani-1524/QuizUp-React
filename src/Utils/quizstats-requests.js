import axios from 'axios'

const handlePostStat = async (statsObj) => {
    const encodedToken = localStorage.getItem('userToken')
    try {
        const res = await axios({
            method: "POST",
            url: "/api/user/quizStat",
            headers: {
                authorization: encodedToken
            },
            data: {
                quizStat: statsObj
            }
        })
        if (res.status === 200 || res.status === 201) {
            return {
                success: true,
                data: res.data
            }
        }
    } catch (err) {
        return {
            success: false,
            errorData: err
        }
    }
}

const handleGetStat = async () => {
    const encodedToken = localStorage.getItem('userToken')
    try {
        const res = await axios({
            method: "GET",
            headers: {
                authorization: encodedToken
            },
            url: "/api/user/quizStats",
        })
        if (res.status === 200 || res.status === 201) {
            return {
                success: true,
                data: res.data
            }
        }
    } catch (err) {
        return {
            success: false,
            errorData: err,
        }
    }
}

export { handlePostStat, handleGetStat }