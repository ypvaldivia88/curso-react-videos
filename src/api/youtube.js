import axios from 'axios';

const KEY = 'AIzaSyCLqht1-fB3DxVzasq1WdkY4wdhRldOh8g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});