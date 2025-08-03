


var taskInput = document.getElementById('task-input')
var btn = document.getElementById('btn')
var tasks = document.getElementById('tasks')
var load = document.getElementById('load')




btn.addEventListener('click', function () {






    console.log(taskInput.value)
    var task = {
        title: taskInput.value,
        apiKey: "659174cb2681618c591ba2cc"
    }
    display()
    sendData(task)

})



function display() {


    taskInput.value = ""

}









async function sendData(task) {

    var data = await fetch('https://todos.routemisr.com/api/v1/todos', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var result = await data.json()
    getData();


}


async function getData() {
    load.style.display='block'
    tasks.style.display='none'
    
    var data = await fetch('https://todos.routemisr.com/api/v1/todos/659174cb2681618c591ba2cc');
    var result = await data.json();
    console.log(result);

    if (result.message == 'success') {
        load.style.display='none'
        tasks.style.display='block'
       
        diData(result.todos);
        
    }



}





getData()

function diData(data) {

    var cartonaa = ``

    for (var i = 0; i < data.length; i++) {
        cartonaa += `
             <div class="task d-flex px-4 py-2 justify-content-between shadow align-items-center p-2 rounded-5 mb-3 ${data[i].completed?"text-success":''} ">
             
                <div class="">
            
                          <p class="task-text  m-0 p-0 ${data[i].completed ? 'text-decoration-line-through':''}">${data[i].title}</p>
                          
                </div>

                <div class="">
                       <i  onclick="marktodo( '${data[i]._id}')" class="fa-regular fa-circle-check mx-3  fs-5 ${data[i].completed ? "d-none" :''}"></i>
                       <i onclick="deletetodo('${data[i]._id}')" class="fa-solid fa-trash mx-3 fs-5"></i>
                       </div>
                </div>`
    }
    tasks.innerHTML = cartonaa
}




















async function deletetodo(id) {

  
    var data = await fetch('https://todos.routemisr.com/api/v1/todos', {
        method: 'DELETE',
        body: JSON.stringify({ todoId: id }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var result = await data.json()
     
    getData();
    

}





async function marktodo(id) {


    var data = await fetch('https://todos.routemisr.com/api/v1/todos', {
        method: 'PUT',
        body: JSON.stringify({ todoId: id }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var result = await data.json()
    getData();

}


// true ? console.log('true') : console.log('false') trimery opeator

