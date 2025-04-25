
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
    params.set("s", inputNode);
    params.set("apikey","beca027f")
    //const apikey = "beca027f";
    
    console.log(params.toString());
    fetch(`http://www.omdbapi.com/?${params.toString()}`)
    .then (response => response.json())
    .then (json => {
        console.log(json);
        result(json);
    })
    .catch(error => console.error('Ошибка:', error));
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    console.log(window.location.href);

}
const result = (data) => {
    const contentNode = document.getElementById("content");
    contentNode.innerHTML = "";
    if (data.Response === "True") {
            data.Search.forEach(item => {
                
                const addLi = document.createElement("li")
                contentNode.appendChild(addLi)
                addLi.classList = "contentLi";

                const imgWrapper = document.createElement("div")
                addLi.appendChild(imgWrapper)
                imgWrapper.classList = "imgWrapper"
    
                const img = document.createElement("img")
                img.src = item.Poster;
                imgWrapper.appendChild(img)
                img.classList ="contentImg";
    
                const h2 = document.createElement("h2")
                h2.textContent = item.Title
                addLi.appendChild(h2)
                h2.classList = "contentH2";
    
                const p1 = document.createElement("p")
                p1.textContent = `Год: ${item.Year}`;
                addLi.appendChild(p1)
                p1.classList = "contentP1";
    
                const p2 = document.createElement("P")
                p2.textContent = item.Type;
                addLi.appendChild(p2)
                p2.classList = "contentP2";
            });


    } else {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = data.Error;
        contentNode.appendChild(errorMessage);
    }
    
}

buttonNode.addEventListener("click",search)