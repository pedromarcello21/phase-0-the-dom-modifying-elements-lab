document.getElementById("main").remove()

const newHeader = document.createElement("h1")

newHeader.innerHTML = "Pedro is the champion"

newHeader.id = "victory"

newHeader.style.color = "blue"

document.body.append(newHeader);


