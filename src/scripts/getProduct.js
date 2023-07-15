export async function productGrid(linkProduct){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/grid/product/${linkProduct}` || `http://localhost:3000/grid/product/${linkProduct}`).catch(error => console.log(error))
        const data = await res.json()
        return data
    }catch(error){
        console.log("Error", error)
    }

}

export async function productMoov(linkProduct1, linkProduct2){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/moov/product/${linkProduct1}/${linkProduct2}.html` || `http://localhost:3000/moov/product/${linkProduct1}/${linkProduct2}.html`).catch(error => console.log(error))
        const data = await res.json()
        return data
    }catch(error){
        console.log("Error", error)
    }

}

export async function productDigitalSport(linkProduct1, linkProduct2, linkProduct3){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/digitalsport/product/${linkProduct1}/${linkProduct2}/${linkProduct3}/`).catch(error => console.log(error))
        const data = await res.json()
        return data
    }catch(error){
        console.log("Error", error)
    }

}

export async function productDexter(linkProduct1, linkProduct2){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/dexter/product/${linkProduct1}/${linkProduct2}.html` || `http://localhost:3000/dexter/product/${linkProduct1}/${linkProduct2}.html`).catch(error => console.log(error))
        const data = await res.json()
        return data
    }catch(error){
        console.log("Error", error)
    }

}

export async function productDrops(productName){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/drops/product/${productName}` || `http://localhost:3000/drops/product/${productName}`).catch(error => console.log(error))
        const data = await res.json()
        return data
    }catch(error){
        console.log("Error", error)
    }

}

export async function productNewBalance(productName){
    try{
        const res = await fetch(`https://sneaker-scrapper-server.vercel.app/newbalance/product/${productName}.html` || `http://localhost:3000/newbalance/product/${productName}.html`).catch(error => console.log(error))
        const data = await res.json()
        return data
    }catch(error){
        console.log("Error", error)
    }

}