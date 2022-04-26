const clock = document.querySelector("h2#clock");

// Intervals 은 매번 일어나야 하는 무언
function sayHello(){
    // console.log("hello");
}

// 실행하려는 함수, 몇 ms 간격으로 할지  
// setInterval(sayHello, 5000); // 5초마다 sayHello 함수 호출

setTimeout(sayHello, 5000); // 5초 뒤 sayHello 함수 호출

// Timeouts and Dates
function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 웹 사이트가 load 되자마자 getClock 함수를 실행
getClock(); 
// 1초마다 실행
setInterval(getClock, 1000);

