import axios from 'axios';

// API call для получения постов в тренде
export default 
async function fetchPosts(_limit){
    try{
        const response = await axios.get ('https://tiktok33.p.rapidapi.com/trending/feed',{
            params:{
                limit:_limit,
            },
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66'
            },
        });

        return response.data;
    }
    catch(e){
        console.log("Error");
        return null;
    }
}
