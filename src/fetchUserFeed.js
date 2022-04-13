import axios from 'axios';

// API call для получения постов пользователя (На момент создания не работал)
// используйте свой API ключ с сайта RapidAPI, хост указан здесь, у меня лимит достигнут
export default 
    async function fetchUserFeed(_user){
        try{
            const response = await axios.get ('https://tiktok33.p.rapidapi.com/user/feed/' + _user,{
                headers: {
                    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                    'x-rapidapi-key': '61c3f265f7msh42816f8cda4bd05p14d05ajsnd0820342e89a'
                },
            });

            return response.data;
        }
        catch(e){
            console.log("Error");
            return null;
        }
    }
