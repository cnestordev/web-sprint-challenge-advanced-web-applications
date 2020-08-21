import axios from 'axios'

export const fetchColors = () => {
    return axios
        .get(
            'localhost:5000/api/colors'
        )
        .then(res => res);
}