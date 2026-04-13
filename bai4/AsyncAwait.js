let myPromise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
	    resolve("Promise resolved");
	},2000);
});

async function asyncFunction() {
	let value = await myPromise;
	console.log(value);
}

asyncFunction();