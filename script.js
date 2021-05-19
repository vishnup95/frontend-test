const inputElement = document.querySelector('#str-input');
const textEle = document.querySelector('.reversed-str');
const resetBtn = document.querySelector('#reset-btn');

const vowels = ['a', 'e', 'i', 'o', 'u'];

inputElement.addEventListener("input", function(e) {
    let value = e.target.value;
    let reversedValue = [...e.target.value].reverse();
    textEle.innerHTML = '';
    reversedValue.forEach(element => {
        let spanEle = document.createElement('span');
        spanEle.classList.add('letter');
        spanEle.innerText = element;
        textEle.appendChild(spanEle)
    });
});

textEle.addEventListener("mouseenter", function(e) {
    const childNodes = [...e.target.childNodes]
    childNodes.forEach(letter => {
        if(vowels.indexOf(letter.innerText.toLowerCase()) !== -1) {
           letter.classList.add('vowel')
        }
    })
});

resetBtn.addEventListener("click",()=> {
    inputElement.value = '';
    textEle.innerHTML = '';
})