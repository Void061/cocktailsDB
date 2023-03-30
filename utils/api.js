

export async function getAllCategories(){
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await response.json();

    return data.drinks;
}

export async function getCocktailsByCategory(cat){
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+cat);
    const data = await response.json();

    return data.drinks;
}


export function encodeCategory(string){

    let code = string.replace("/", "%2F");

    return code;
}

export function decodeCategory(string){
    let encode = string.replace("%2F", "/");
    encode = encode.replace("%20", "");
    return encode;
}