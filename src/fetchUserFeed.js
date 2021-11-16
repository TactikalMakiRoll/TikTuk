import axios from 'axios';

// API call для получения постов пользователя (На момент создания не работал)
export default 
    async function fetchUserFeed(_user){
        try{
            const response = await axios.get ('https://tiktok33.p.rapidapi.com/user/feed/' + _user,{
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
