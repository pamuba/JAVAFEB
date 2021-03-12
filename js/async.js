function doubleAfter25Seconds(x){
    return new Promise((resolve)=>{
        resolve(x*2)
    }, 2000)
}

doubleAfter25Seconds(10).then((result)=>{
    console.log(result)
})

let sum = doubleAfter25Seconds(10) 
         + doubleAfter25Seconds(10) 
         + doubleAfter25Seconds(10)
console.log(sum)

//will always return a promise
async function addAsync(){
    const a = await doubleAfter25Seconds(10)
    const b = await doubleAfter25Seconds(10)
    const c = await doubleAfter25Seconds(10)

    return a+b+c
}

addAsync().then(r=>console.log(r))

//confirm
//prompt



