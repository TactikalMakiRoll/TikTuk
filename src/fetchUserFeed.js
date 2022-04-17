import axios from 'axios';

// API call для получения постов пользователя (На момент создания не работал)
// используйте свой API ключ с сайта RapidAPI, хост указан здесь, у меня лимит достигнут
export default 
    async function fetchUserFeed(_user){
        try{
            const response = await axios.get ('https://tiktok33.p.rapidapi.com/user/feed/' + _user,{
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
