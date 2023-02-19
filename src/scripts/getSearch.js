export async function getGrid(input){
    try{
        const res = await fetch(`https://hypescrap-production.up.railway.app/grid/${input}`).catch(error => console.log("error", error))

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



        const res = await fetch(`https://hypescrap-production.up.railway.app/digitalsport/${input}`).catch(error => console.log("error", error))
    
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

        const res = await fetch(`https://hypescrap-production.up.railway.app/moov/${input}`).catch(error => console.log("error", error))
    
        
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
        const res  = await fetch(`https://hypescrap-production.up.railway.app/newbalance/${input}`).catch(error => console.log("error", error))

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
        const res  = await fetch(`https://hypescrap-production.up.railway.app/dexter/${input}`).catch(error => console.log("error", error))

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

export async function funcarral(input){
    try{

        const res  = await fetch(`https://hypescrap-production.up.railway.app/funcarral/${input}`).catch(error => console.log("error", error))
    
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

        const res  = await fetch(`https://hypescrap-production.up.railway.app/drops/${input}`).catch(error => console.log("error", error))

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