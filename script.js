let addmessage = document.querySelector ('.message');
let addbutton = document.querySelector ('.add');
let delbutton = document.querySelector ('.delete');
let todo = document.querySelector ('.todo');
let todoList = [];
if (localStorage.getItem ('todo'))
{
    todoList = JSON.parse(localStorage.getItem('todo'))
    display();
}
addbutton.addEventListener ('click',function () {
    let newTodo  = {
        todo:addmessage.value,
        checked:false,
        
    };
    todoList.push (newTodo);
    display();
    localStorage.setItem ("todo",JSON.stringify (todoList))
    addmessage.value = "";
   
});
function display (){
     let display = "";
     if (todoList.length === 0)
     {
        todo.innerHTML = '';
     }
    todoList.forEach (function (item,i) {
        if (item.todo != '')
        {
         display  += `
        <li>
        <input type = 'checkbox' id = 'item_${i}' ${item.checked ? 'checked' : ""}>
        <label for= 'item_${i}'>${item.todo}</label>
        </li>
        
        `};
        todo.innerHTML = display;
    })

}
todo.addEventListener ('change',function (event){

    let idInput = event.target.getAttribute ('id');
    let forlabel = todo.querySelector ('[for=' + idInput + ']');
    let valuelabel  = forlabel.innerHTML;
    todoList.forEach (function (item) {
        if (item.todo === valuelabel)
        {
            item.checked = !item.checked;
            localStorage.setItem ('todo',JSON.stringify (todoList))
        }
    })
    
})
delbutton.addEventListener ('click',function (){
    let list = todoList.filter (function (item){
        return item.checked === false;
    })
    todoList = list;
    
    display();
    localStorage.setItem ("todo",JSON.stringify (todoList))
})
