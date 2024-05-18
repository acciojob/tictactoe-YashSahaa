//your JS code here. If required.
let submit = document.getElementById("submit")
let inputs = document.querySelectorAll("input")
let message = document.querySelector(".message")
let form = document.querySelector('form')
let heading = document.querySelector("h3")

let box = document.querySelectorAll(".box")

submit.addEventListener("click",(event_details)=>{
    if(inputs[0].value!="" &&  inputs[1].value!=""){
        event_details.preventDefault()
        form.classList.add("dis")
        message.classList.remove("dis")

        heading.innerText = `${inputs[0].value}.You are up`
        let count = 0
        let val = true;
        let game = true;
        for (let i = 0; i < box.length; i++) {
            box[i].addEventListener("click",()=>{
                console.log(i)
                if(box[i].innerText=="" && game){
                    if(val){
                        box[i].innerText = "X"
                        val = false
                    } else{
                        box[i].innerText = "O"
                        val = true
                    }

                    count++

                    if(checkForWin()){

                        if(count%2==0){
                            heading.innerText = `${inputs[1].value}.Won`
                        }
                        else{
                            heading.innerText = `${inputs[0].value}.Won`
                        }
                        game=false;

                    } else{ 

                        if(count==9){
                            heading.innerText = `Game Over`
                        }
                        else if(count%2==0){
                            heading.innerText = `${inputs[0].value}.You are up`
                        }
                        else{
                            heading.innerText = `${inputs[1].value}.You are up`
                        }

                    }
                }
            })
        }
    }
    
})
function checkForWin() {
    if(box[0].innerText=='X'&&box[1].innerText=='X'&&box[2].innerText=='X') {
        box[0].classList.add("won")
        box[1].classList.add("won")
        box[2].classList.add("won")
        return true;
    }
    if(box[0].innerText=='X'&&box[3].innerText=='X'&&box[6].innerText=='X') {
        box[0].classList.add("won")
        box[3].classList.add("won")
        box[6].classList.add("won")
        return true;
    }
    if(box[3].innerText=='X'&&box[4].innerText=='X'&&box[5].innerText=='X') {
        box[3].classList.add("won")
        box[4].classList.add("won")
        box[5].classList.add("won")
        return true;
    }
    if(box[6].innerText=='X'&&box[7].innerText=='X'&&box[8].innerText=='X') {
        box[6].classList.add("won")
        box[7].classList.add("won")
        box[8].classList.add("won")
        return true;
    }
    if(box[4].innerText=='X'&&box[1].innerText=='X'&&box[7].innerText=='X') {
        box[4].classList.add("won")
        box[1].classList.add("won")
        box[7].classList.add("won")
        return true;
    }
    if(box[5].innerText=='X'&&box[8].innerText=='X'&&box[2].innerText=='X') {
        box[5].classList.add("won")
        box[8].classList.add("won")
        box[2].classList.add("won")
        return true;
    }
    if(box[0].innerText=='X'&&box[4].innerText=='X'&&box[8].innerText=='X') {
        box[0].classList.add("won")
        box[4].classList.add("won")
        box[8].classList.add("won")
        return true;
    }
    if(box[2].innerText=='X'&&box[4].innerText=='X'&&box[6].innerText=='X') {
        box[2].classList.add("won")
        box[4].classList.add("won")
        box[6].classList.add("won")
        return true;
    }
    if(box[0].innerText=='O'&&box[1].innerText=='O'&&box[2].innerText=='O') {
        box[0].classList.add("won")
        box[1].classList.add("won")
        box[2].classList.add("won")
        return true;
    }
    if(box[0].innerText=='O'&&box[3].innerText=='O'&&box[6].innerText=='O') {
        box[0].classList.add("won")
        box[3].classList.add("won")
        box[6].classList.add("won")
        return true;
    }
    if(box[3].innerText=='O'&&box[4].innerText=='O'&&box[5].innerText=='O') {
        box[3].classList.add("won")
        box[4].classList.add("won")
        box[5].classList.add("won")
        return true;
    }
    if(box[6].innerText=='O'&&box[7].innerText=='O'&&box[8].innerText=='O') {
        box[6].classList.add("won")
        box[7].classList.add("won")
        box[8].classList.add("won")
        return true;
    }
    if(box[4].innerText=='O'&&box[1].innerText=='O'&&box[7].innerText=='O') {
        box[4].classList.add("won")
        box[1].classList.add("won")
        box[7].classList.add("won")
        return true;
    }
    if(box[5].innerText=='O'&&box[8].innerText=='O'&&box[2].innerText=='O') {
        box[5].classList.add("won")
        box[8].classList.add("won")
        box[2].classList.add("won")
        return true;
    }
    if(box[0].innerText=='O'&&box[4].innerText=='O'&&box[8].innerText=='O') {
        box[0].classList.add("won")
        box[4].classList.add("won")
        box[8].classList.add("won")
        return true;
    }
    if(box[2].innerText=='O'&&box[4].innerText=='O'&&box[6].innerText=='O') {
        box[2].classList.add("won")
        box[4].classList.add("won")
        box[6].classList.add("won")
        return true;
    }
    return false;
}

