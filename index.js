const inputNode = document.getElementById("input");
const buttonNode = document.getElementById("button");
const contentNode = document.getElementById("content");
const params = new URLSearchParams(location.search);


const i = params.get("i");
console.log(i);
fetch(`http://www.omdbapi.com/?i=${i}&apikey=beca027f`)
.then (response => response.json())
.then (json => console.log(json))




const search = () => {
    const s = params.get("s");
    console.log(s);
    fetch(`http://www.omdbapi.com/?s=${s}&apikey=beca027f`)
    .then (response => response.json())
    .then (json => console.log(json))

}
buttonNode.addEventListener("click",search)