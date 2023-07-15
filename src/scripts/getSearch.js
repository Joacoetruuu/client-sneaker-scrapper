export async function getGrid(input){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/grid/${input}` || `http://localhost:3000/grid/${input}`).catch(error => console.log("error", error))

        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
        
        const data = await res.json(); 
    
        return data


    }
    catch(error){
        return [
            {"status": error}
        ]
    }


}

export async function getGridLanding(input){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/landing/moov/${input}` || `http://localhost:3000/moov/${input}`).catch(error => console.log("error", error))

        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
        
        const data = await res.json(); 
    
        return data


    }
    catch(error){
        return [
            {"status": error}
        ]
    }


}


export async function getDigital(input){

    try{



        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/digitalsport/${input}` || `http://localhost:3000/digitalsport/${input}`).catch(error => console.log("error", error))
    
        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
    
        const data = await res.json();
    
        return data


    }
    catch(error){
        return [
            {"status": error}
        ]
    }

}


export async function getDigitalLanding(input){

    try{



        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/landing/digitalsport/${input}` || `http://localhost:3000/digitalsport/${input}`).catch(error => console.log("error", error))
    
        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
    
        const data = await res.json();
    
        return data


    }
    catch(error){
        return [
            {"status": error}
        ]
    }

}


export async function moov(input){

    try{

        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/moov/${input}` || `http://localhost:3000/moov/${input}` ).catch(error => console.log("error", error))
    
        
        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
    
        const data = await res.json(); 
    
    
    
        return data

    }
    catch(error){
        return [
            {"status": error}
        ]
    }
}

export async function newBalance(input){
    try{
        const res  = await fetch(`https://sneaker-scrapper-server.vercel.app/newbalance/${input}` || `http://localhost:3000/newbalance/${input}` ).catch(error => console.log("error", error))

        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
    
    
        const data = await res.json(); 
    
        return data
    }

    catch(error){
        return [
            {"status": error}
        ]
    }
}

export async function dexter(input){

    try{
        const res  = await fetch(`https://sneaker-scrapper-server.vercel.app/dexter/${input}` || `http://localhost:3000/dexter/${input}` ).catch(error => console.log("error", error))

        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
    
        const data = await res.json(); 
    
        return data
    }
    catch(error){
        return [
            {"status": error}
        ]
    }

}


export async function drops(input){
    try{

        const res  = await fetch(`https://sneaker-scrapper-server.vercel.app/drops/${input}` || `http://localhost:3000/drops/${input}` ).catch(error => console.log("error", error))
    
        if(res === undefined){
            return [
                {
                    "title": "title",
                    "price": "price",
                    "img": "img",
                    "href": "href",
                    "storeLogo": "storeLogo"
                }
            ]
        }
        const data = await res.json(); 
    
        return data

    }
    catch(error){
        return [
            {"status": error}
        ]
    }

}

// export async function dropsMaxPage(input){
//     try{

//         const res  = await fetch(`https://sneaker-scrapper-server.vercel.app/dropsfull/${input}/1`).catch(error => console.log("error", error))

//         if(res === undefined){
//             return [
//                 {
//                     "title": "title",
//                     "price": "price",
//                     "img": "img",
//                     "href": "href",
//                     "storeLogo": "storeLogo", 
//                     "maxPage": "maxPage"
//                 }
//             ]
//         }
    
//         const data = await res.json(); 
//         return data[data.length - 1].maxPage

//     }
//     catch(error){
//         return [
//             {"status": error}
//         ]
//     }
// }



// export async function fullDrops(input){
//     try{
//         const listData = []

//         for (let i = 1; i <= await dropsMaxPage(input); i++){
//             console.log(i)

//             const res  = await fetch(`https://sneaker-scrapper-server.vercel.app/dropsfull/${input}/${i}`).catch(error => console.log("error", error))

            
//             if(res === undefined){
//                 return [
//                     {
//                         "title": "title",
//                         "price": "price",
//                         "img": "img",
//                         "href": "href",
//                         "storeLogo": "storeLogo"
//                     }
//                 ]
//             }
        
//             const data = await res.json(); 
//             listData.push({"page": data})
//         }
//         return listData 
                
//     }
//     catch(error){
//         return [
//             {"status": 404}
//         ]
//     }

// }

