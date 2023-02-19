export async function getGrid(input){
    const res = await fetch(`https://hypescrap-production.up.railway.app/grid/${input}`).catch(error => console.log("error", error))
    const data = await res.json(); 
    return data
}

export async function getDigital(input){
    const res = await fetch(`https://hypescrap-production.up.railway.app/digitalsport/${input}`).catch(error => console.log("error", error))
    const data = await res.json();
    return data
}

export async function moov(input){
    const res = await fetch(`https://hypescrap-production.up.railway.app/moov/${input}`).catch(error => console.log("error", error))
    const data = await res.json(); 
    return data
}

export async function newBalance(input){
    const res  = await fetch(`https://hypescrap-production.up.railway.app/newbalance/${input}`).catch(error => console.log("error", error))
    const data = await res.json(); 
    return data
}

export async function dexter(input){
    const res  = await fetch(`https://hypescrap-production.up.railway.app/dexter/${input}`).catch(error => console.log("error", error))
    const data = await res.json(); 
    return data
}

export async function funcarral(input){
    const res  = await fetch(`https://hypescrap-production.up.railway.app/funcarral/${input}`).catch(error => console.log("error", error))
    const data = await res.json(); 
    return data
}

export async function drops(input){
    const res  = await fetch(`https://hypescrap-production.up.railway.app/drops/${input}`).catch(error => console.log("error", error))
    const data = await res.json(); 
    return data
}