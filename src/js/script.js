// TODO

const rouge = document.querySelector("p#a-mettre-en-rouge");
rouge.style.color ='red'

const clickrouge = document.querySelector('button#en-rouge-suite-a-click');
clickrouge.addEventListener("click",()=>clickrouge.style.color = 'red')

const lesH2 = document.querySelectorAll("h2");
lesH2.forEach((elm)=>{elm.addEventListener("click",(evt)=>{evt.target.style.color = 'red';
});
});
