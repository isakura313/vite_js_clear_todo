import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

let el = document.createElement("input");
app.append(el);
const btn = document.createElement("button");
btn.textContent = "Нажми";
app.append(btn);

const todo = document.createElement("div");
app.append(todo);

app.onclick = (e) => {
  if (el.value === "") {
    return;
  }
  const list_element = document.createElement("div")
  list_element.innerHTML = `<div> ${el.value} <button class="delete"> delete </button> </div>`;
  todo.append(list_element);
  el.value = "";

  e.preventDefault();
  const deleteBtn = document.querySelectorAll(".delete");
  const delBTN:Element[] =  Array.from(deleteBtn);
  delBTN.map((el)=>{
    el.addEventListener('click', (e)=>{
     const del = e.target;
    del.parentNode.remove()
    })
  })
};
