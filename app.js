function getRandomNumber(){
    
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
            let num=Math.random()  
            if(num){
                resolve(num)
            }
            else{reject("Error: Wrong Number")
                }
            },500);
        })
    }

// getRandomNumber()
//     .then(num=> console.log(num ))
//     .catch(err=> console.log(err))

 async function printRandom(){
    let num= await getRandomNumber();
    console.log(num)

 }

 printRandom()


 async function getLogLat(name){
    const res= await fetch(`https://geocode.xyz/${name}?json=1`)
    const data= await res.json();
    await console.log(data.longt, data.latt)

 }

 getLogLat("Seattle")
