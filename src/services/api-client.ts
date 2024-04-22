import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '986b028bc5ad40c39e1477e9f2e97697'
    }
})