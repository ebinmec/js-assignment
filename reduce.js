function sum(total,num){
    return total+num;
}

function reduce(list,func){

    let total = list[0];
    for (let i=1;i<list.length;i++)
       total = func(total,list[i]);
        
   return total;
}

const list = [1,2,3,4];
const value=reduce(list,sum);
console.log(value);