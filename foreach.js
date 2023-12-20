function double(num){
    return num*2;
}


function foreach(list, func){

    for (let i=0;i<list.length;i++)
        list[i]=func(list[i]);

}

const list = [1,2,3];
foreach(list,double);
console.log(list);
