console.log("Frontend JS");
const createField = document.getElementById("create-field");


function itemTemplate(item) {
    return `
    <li
            class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
          >
            <span class="item-text">${item.reja} </span>
            <div>
              <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"
              >
                Edit
              </button>
              <button
              data-id="${item._id}"
                class="edit-me btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
    `;
  }

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then(response=>{
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField = "";
        createField.focus();
    }).catch((err)=>{
        console.log("Iltimos qaytadan harakat qiling!");
    })
});

document.addEventListener("click", function(e){
    // delete
    if(e.target.classList.contains("delete-me")){
        if(confirm("Aniq o'chirmoqchimisiz?")){
            axios.post("/delete-item",{id: e.target.getAttribute("data-id")})
            .then(response => {
                console.log(e.target.parentElement.parentElement);
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch(err => {
                console.log("Iltimos qaytadan harakat qiling!");
            })
        }
    }

    // edit
    if(e.target.classList.contains("edit-me")){
        alert("edit")
    }
})