import axios from "axios";

const GetTest = () => {
    return axios.get("http://localhost:8000/test");
}

const PostPrompt = (prompt) => {
    return axios.post('http://localhost:8000/request/prompt',
        {
            question: prompt
        })
}

export { GetTest, PostPrompt };