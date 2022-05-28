import axios from 'axios'

const loginUser = async (loginData) => {
    try {
        const res = await axios.post('/api/auth/login', { ...loginData })
        const encodedToken = res.data.encodedToken
        axios.defaults.headers.common['authorization'] = encodedToken;
        if (res.status === 200 || res.status === 201) {
            console.log("INNN")
            return {
                data: res.data.encodedToken,
                msg: "Logged in Successfully",
                errorData: [false],
            }
        }
    } catch (err) {
        return {
            data: "",
            msg: "Please Enter Valid Details",
            errorData: [true, err],
        }
    }
}
const signupUser = async (signupData) => {
    try {
        const res = await axios.post('/api/auth/signup', { ...signupData })
        console.log(res)
        if (res.status === 201 || res.status === 200) {
            const encodedToken = res.data.encodedToken
            axios.defaults.headers.common['authorization'] = encodedToken;
            return {
                data: res.data.encodedToken,
                msg: "Signed Up Successfully",
                errorData: [false],
            }
        }
    } catch (err) {
        console.error(err.message)
        return {
            data: "",
            msg: "Please Enter Valid Details",
            errorData: [true, err],
        }
    }
}
export { loginUser, signupUser }