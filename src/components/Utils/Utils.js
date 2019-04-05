export function makeUrl(str) {
    // replace spaces special characters, and spaces with - in a string
    if(str)
        return str.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-").toLowerCase();
}