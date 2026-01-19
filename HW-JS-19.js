// Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const inputColorRef = document.querySelectorAll("input");
// console.log(inputColorRef);

inputColorRef.forEach((item) => {
    // console.log(item.checked, item.value);
    if (item.checked) {
        document.body.style.backgroundColor = item.value
    }
    item.addEventListener("change", (event) => {
        const color = event.currentTarget.value;
        document.body.style.backgroundColor = color;
    })
})


// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    console.log(value);
    outputRef.textContent = value;
    if (value.length === 0) {
        outputRef.textContent = "Незнайомець"
    }
})

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.

const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
    const validLength = Number(inputEl.dataset.length);
    const textLength = inputEl.value.length;
    inputEl.classList.remove("valid", "invalid")
    if (textLength === validLength) {
        inputEl.classList.add("valid");
    }else{
        inputEl.classList.add("invalid");
    }
})

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener('input', (event) => {
  text.style.fontSize = `${sizeControl.value}px`;
});