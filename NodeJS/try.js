try{
    setTimeout(function(){
        throw new Error('Error Message')
    }, 2000)
}
catch(ex){
    console.log("Catch block executed")
}
//some other code