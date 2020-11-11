import axios from 'axios'

const KEY = 'AIzaSyB1xkXidtfVDtpu3CDzhaAJiUbanvyDeYQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});

