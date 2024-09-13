let x = 0; 
let y = 0; 
const amounttobemoved = 10; 
const mybox = document.getElementById('box'); 
const mylogo=document.getElementById('logo');
document.addEventListener("keyup",changecolor1);
document.addEventListener("keydown", movebox);
function changecolor1(event)
{
    mybox.style.backgroundColor="green";
    mylogo.textContent='😊';
}

function movebox(event){
    // console.log(event);

    mybox.style.backgroundColor="red";
    mylogo.textContent='😵‍💫';
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= amounttobemoved;
                break;
            case "ArrowDown":
                y += amounttobemoved;
                break;
            case "ArrowRight":
                x += amounttobemoved;
                break;
            case "ArrowLeft":
                x -= amounttobemoved;
                break;
        }
        
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
}

