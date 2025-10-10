let money=2000;
let productprice=2500;
let myPromise = new Promise((resolve,reject)=>{
    console.log('checking payment');
    setTimeout(()=>{
        if(productprice==2500){
            resolve('payment successfull');
            // console.log('resolve');
                }else
            {
            reject('there is no sufficient balence');
            // console.log('reject');
        }
    },4000);
})
myPromise.then(result=>{
console.log(result);
})
.catch(error=>{
console.log(error);
});


