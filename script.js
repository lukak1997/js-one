function removeDuplicates(arr){
    let unicueArr=[];
    for(let i=0; i<arr.length; i++){
        if(!unicueArr.includes(arr[i])){
        unicueArr.push(arr[i])}

    }
    return unicueArr;
}

console.log(removeDuplicates([1,1,1,2,2,3,3,3]));
// console.log([1,2,3,].includes[4]);

function arrLast(n){
    return n.sort((a,b) => b-a)
    
}
console.log(arrLast([1,3,4,10,3,4,5]))


function n(a,b,c,){
    return (a+b+c)/3
}

let firstTeam=n(44, 23, 71)
// console.log(firstTeam)
 let secondTeam=n(65, 55, 49);
if(firstTeam<secondTeam){
    console.log('won')
}else if(firstTeam===secondTeam){
    console.log('draw')

}else{
    console.log('is not')
}



function newArr(arr){
   let add =[]
    for (let  i= 0;  i< arr.length; i++) {
       add.push(arr[i])
    }
    for (let  i= 0;  i< arr.length; i++) {
        add.push(arr[i])
     }
 

return add
  }
  console.log(newArr([1,2,3,]))