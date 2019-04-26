export function makeUrl(str) {
    // replace spaces special characters, and spaces with - in a string
    if(str)
        return str.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g,"-").toLowerCase();
}

export function removeBg(){
    document.getElementById("layout").style.backgroundImage = '';
}

export function getAge(birthdate){
    var birthdate = new Date(birthdate);
    var cur = new Date();
    var diff = cur-birthdate;
    return Math.floor(diff/31536000000);
}

export function Capitalize(string){
 if(string.length)
     return string.charAt(0).toUpperCase() + string.slice(1)
 return false;
}