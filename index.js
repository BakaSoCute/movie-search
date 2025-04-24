
const buttonNode = document.getElementById("button");
const params = new URLSearchParams(location.search);


const i = params.get("i");
console.log(i);
if (i) {
    fetch(`http://www.omdbapi.com/?i=${i}&apikey=beca027f`)
    .then (response => response.json())
    .then (json => console.log(json))
}





const search = () => {
    const inputNode = document.getElementById("input").value;
    params.set("t", inputNode);
    params.set("apikey","beca027f")
    const apikey = "beca027f";
    
    console.log(params.toString());
    fetch(`http://www.omdbapi.com/?${apikey}&${params.toString()}`)
    .then (response => response.json())
    .then (json => {
        console.log(json);
        result(json);
    })
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    console.log(window.location.href);

}
const result = (data) => {
    const contentNode = document.getElementById("content");
    contentNode.innerHTML = "";
    if (data.Response === "True") {
        const addLi = document.createElement("li")
        contentNode.appendChild(addLi)
    
        const img = document.createElement("img")
        img.src = data.Poster;
        addLi.appendChild(img)
    
        const h2 = document.createElement("h2")
        h2.textContent = data.Title
        addLi.appendChild(h2)
    
        const p1 = document.createElement("p")
        p1.textContent = `Год: ${data.Year}`;
        addLi.appendChild(p1)
    
        const p2 = document.createElement("P")
        p2.textContent = data.Type;
        addLi.appendChild(p2)


    } else {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = data.Error;
        contentNode.appendChild(errorMessage);
    }
    
}

buttonNode.addEventListener("click",search)