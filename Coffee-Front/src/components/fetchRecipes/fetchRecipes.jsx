import axios from 'axios';

const fetchRecipes = async () => {
    const url = 'http://127.0.0.1:8000/api/recipes/';
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await axios.get(url, config);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
export default fetchRecipes