// вынос функции нормализации вывода данных в подключаемый mixin
export default{
    methods:{
        normalizeCount(count){
            if(count>1000000)
                return count/1000000 + "M"
            else if(count>10000)
                return count/1000 + "K"
            else{
                return count;
            }
        }
    },
}