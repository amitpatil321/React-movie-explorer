import stringCase from "./stringCase";
export function makeUrl(str) {
  // replace spaces special characters, and spaces with - in a string
  if (str)
    return str
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
}

export function removeBg() {
  document.getElementById("layout").style.backgroundImage = "";
}

export function getAge(birthdate) {
  birthdate = new Date(birthdate);
  var cur = new Date();
  var diff = cur - birthdate;
  return Math.floor(diff / 31536000000);
}

export function Capitalize(string) {
  if (string && string.length) {
    var str = new stringCase(string).titleCase();
    return str;
  }
  return false;
}

export function extractUrl(url, node) {
  if (url.length > 1) {
    let arr = url.split("/");
    if (node === "id")
      // return id from url
      return arr[2];
    else if (node === "name")
      // return movie name
      return arr[3].replace(/-/g, " ");
  }
  return false;
}
