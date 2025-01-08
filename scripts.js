let api = "https://jsonplaceholder.typicode.com/todos/";
const show_all = document.getElementById("show");
const form = document.getElementById("form-container");
const response = document.getElementById("response");

show_all.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(api)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            response.innerHTML = ""
            data.forEach(dt => {
                const box =document.createElement("div")
                const title = dt.title;
                const id = dt.userId;
                const is_completed = dt.completed;

                box.innerHTML = `<h2>Title: ${title}</h3>
                    <h3>id: ${id}</h4>
                    <h3>completed: ${is_completed}</h3>`
                response.appendChild(box)
                box.style.backgroundColor="#ffe3c4"
                box.style.margin="10px"
                box.style.border="2px solid black"
                // box.style.padding="5px 10px 0px 10px"
                const inner_box=document.createElement("div")
                box.appendChild(inner_box)
                inner_box.style.height="20px"
                if(is_completed===true)
                {
                    inner_box.style.backgroundColor="green"
                }
                else
                {
                    inner_box.style.backgroundColor="red"
                }
            });

        })

})

