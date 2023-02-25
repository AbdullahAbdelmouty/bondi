const magnifying = document.querySelector(".searchMag");
let flag = false;
magnifying.addEventListener("click",()=>{
    const searchInput = document.querySelector(".form-control");
    if(flag){
        flag=false;
    }
    else if(!flag){
        flag=true;
    }
    if(!flag){
        searchInput.style.display = "none";
    }
    
    else if(flag){
        searchInput.style.display = "block";
    }
})
const navbar_toggler = document.querySelector(".navbar-toggler");
navbar_toggler.addEventListener("click",(e)=>{
    navbar_toggler.classList.toggle("navbar-toggler_flip");
})
// Start Projects Section
const list = document.querySelectorAll('.list-unstyled li');
const all = Array.from(document.querySelectorAll('.projects .row .all'));
const design = Array.from(document.querySelectorAll('.projects .row .design'));
const code = Array.from(document.querySelectorAll('.projects .row .code'));
const photo = Array.from(document.querySelectorAll('.projects .row .photo'));
const app = Array.from(document.querySelectorAll('.projects .row .app'));
const show_more = document.querySelector(".show-more");
let count = 0;
let increase = 4;
let full = false;
function displayItems (dataset){
    const type = Array.from(document.querySelectorAll(`.projects .row .${dataset}`));
    type.forEach(e=>{
        if(count<increase){
            e.style.display = 'block';
            count++;
        }
    })
}
function increaseItems (dataset){
    count = 0;
    increase+=4;
    displayItems(dataset);
}
window.addEventListener('load',e=>{
    displayItems("all");
})
function fullItems(ele){
    const typeEle = Array.from(document.querySelectorAll(`.projects .row .${ele.dataset.cat}`));
        if(count>=typeEle.length){
        full = true;
        }
        return full;

}
list.forEach((ele)=>{
    ele.addEventListener("click",(eve)=>{
        count=0;
        increase=4;
        all.forEach(e=>{
            e.style.display = 'none';
        }
        )
        displayItems(ele.dataset.cat);
        if(show_more.classList.contains("show_less")){
            console.log('f')
            show_more.classList.remove("show_less");
            show_more.classList.add("show_more");
            show_more.innerHTML = "Show More"
        }
        list.forEach(ee=>{
            ee.classList.remove("active");
        })
        eve.target.classList.add("active");
    })
}
)
show_more.addEventListener("click",e=>{
    list.forEach(ele=>{
        if(ele.classList.contains("active")){
            increaseItems(ele.dataset.cat);
            console.log("Ddd")
        }
        if(ele.classList.contains("active") && fullItems(ele)){
            show_more.classList.remove("show-more");
            show_more.classList.add("show_less");
            const show_less = document.querySelector(".show_less");
            show_more.innerHTML = "Show Less";
            console.log(show_less)
        }
    })
})
// const show_less = document.querySelector(".show_less");
// show_less.addEventListener('click',e=>{
//     // list.forEach(ele=>{
//     //     all.forEach(e=>{
//     //         e.style.display = 'none';
//     //     }
//     //     )
//     //     displayItems(ele.dataset.cat);
//     // })
//     console.log("hhh")
// })
// End Projects Section
