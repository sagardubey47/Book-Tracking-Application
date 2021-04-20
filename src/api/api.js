import axios from "axios";

export const request = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
    params: {
        key: 'AIzaSyBn-I_mCRpLadK16M8cCI_NTzPuB7klAXg',
    },
})

