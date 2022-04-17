import axios from 'axios';

// API call для получения постов в тренде
// используйте свой API ключ с сайта RapidAPI, хост указан здесь, у меня лимит достигнут
export default 
async function fetchPosts(_limit){
    try{
        const response = await axios.get ('https://tiktok33.p.rapidapi.com/trending/feed',{
            params:{
                limit:_limit,
            },
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': '3ac6f987f7mshb869fafe1a34da5p16ab3djsn954aac1f503c'
            },
        });
        return response.data;
    }
    catch(e){
        console.log("Error");
        return null;
    }
}
