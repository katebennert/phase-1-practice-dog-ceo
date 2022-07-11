document.addEventListener("DOMContentLoaded", () => {
    // CHALLENGE 1: fetch dog images, add to DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(dogs => {
        dogs.message.forEach(function(dog) {
            let img = document.createElement("img");
            img.setAttribute("src", `${dog}`);
            document.querySelector("#dog-image-container").appendChild(img);
        })
    })

    // CHALLENGE 2: fetch all breeds for UL
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        const breedNames = Object.keys(breeds.message);
        breedNames.forEach(function(breed) {
            let li = document.createElement("li");
            li.innerText = breed;
            document.querySelector("ul").appendChild(li);
            // CHALLENGE 3: add color to click
            li.addEventListener("click", e => {
                e.target.setAttribute("style", "color:pink")
            })
       })
        // CHALLENGE 4: dropdown filter
        const aDogs = breedNames.filter(breed => breed.substring(0,1) === "a");
        const bDogs = breedNames.filter(breed => breed.substring(0,1) === "b");
        const cDogs = breedNames.filter(breed => breed.substring(0,1) === "c");
        const dDogs = breedNames.filter(breed => breed.substring(0,1) === "d");

        document.querySelector("select").addEventListener("change", e => {
            switch (e.target.value) {
                case "a":
                    clearList();
                    aDogs.forEach(function(dog) {
                        let li = document.createElement("li");
                        li.innerText = dog;
                        document.querySelector("ul").appendChild(li);
                    });
                    break;
                case "b":
                    clearList();
                    bDogs.forEach(function(dog) {
                        let li = document.createElement("li");
                        li.innerText = dog;
                        document.querySelector("ul").appendChild(li);
                    });
                    break;
                case "c":
                    clearList();
                    cDogs.forEach(function(dog) {
                        let li = document.createElement("li");
                        li.innerText = dog;
                        document.querySelector("ul").appendChild(li);
                    });
                    break;
                case "d":
                    clearList();
                    dDogs.forEach(function(dog) {
                        let li = document.createElement("li");
                        li.innerText = dog;
                        document.querySelector("ul").appendChild(li);
                    });
                    break;
                default: 
                    clearList();
                    breedNames.forEach(function(breed) {
                        let li = document.createElement("li");
                        li.innerText = breed;
                        document.querySelector("ul").appendChild(li);
                        li.addEventListener("click", e => {
                            e.target.setAttribute("style", "color:pink")
                        })
                    });
            }
        });

        function clearList() {
            const list = document.querySelectorAll("li");
            for (let i = 0; i < list.length; i++) {
                list[i].remove();
            }    
        }
    })

})
