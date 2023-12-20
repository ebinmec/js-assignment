function square(num){
    return num*num
}


function map(list, func){

    const newList = [];

    for (let i=0;i<list.length;i++)
        newList[i]=func(list[i]);

    return newList;
}

const list = [1,2,3];
const newList = map(list,square);
console.log(newList);