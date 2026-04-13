const myPromise = new Promise((resolve,reject)=>{

setTimeout(()=>{
	const randomNum = Math.random();
	if(randomNum < 0.5) {
		resolve(randomNum);
	} else{
		reject('Error:random Number is greater than 0.5');
	}
},2000);
});

myPromise.then(result =>{
	console.log('Success:',result);
})
.catch(error =>{
	console.log('Error:',error);
})	