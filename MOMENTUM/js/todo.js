const toDoFrom = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

 // localStorage에 저장 
function saveToDos() {
    // 배열을 stringify로 저장해서 배열 형태로
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

// todo 삭제
function deleteToDo(event){
    // event.target.parentElement : 클릭한 <button> 의 부모태그
    const li = event.target.parentElement;
    console.log(li.id); // 삭제되는 li 태그 id 확인
    li.remove();

    // li.id 가 type 이 String이므로 parseInt로 형변환
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // console.log(toDos)
    saveToDos();
}


// toDo를 그리는 역할
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    const button = document.createElement("button"); // 삭제하는 버튼 추가

    span.innerText = newTodo.text;
    button.innerText = "❌";

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);   // x 버튼 클릭 시
}

function handleToDoSubmit(event) {
    // submit 의 기본동작인 새로고침이 안되도록
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";  // toDoInput 에 입력한 내용 지우기

    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }

    toDos.push(newTodoObj);

    paintToDo(newTodoObj); // // toDo를 그리기

    saveToDos();
}

toDoFrom.addEventListener("submit", handleToDoSubmit);

// localStorage 에 저장된 값 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY); 

// localStorage에 Key todos 값이 있으면 브라우저 실행했을 때 출력되도록
if (savedToDos) {   // savedToDos !== null
    const parsedToDos = JSON.parse(savedToDos);
 
    // parsedToDos.forEach((item) => console.log("this is turn of ", item));    

    toDos = parsedToDos;

    // forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행
    parsedToDos.forEach(paintToDo); 
}





 