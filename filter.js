function even(num){
   return num%2==0;
}

function filter(list,func){

    const evenList = [];

    for (let i=0;i<list.length;i++)
        if(func(list[i]))
           evenList[evenList.length]=list[i];
    
    return evenList;
}

const list = [1,2,3,4];
const evenList=filter(list,even);
console.log(evenList); 