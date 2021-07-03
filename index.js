var booked=0;
var Remaining=57;
document.getElementById("booked").innerHTML = booked;
document.getElementById("available").innerHTML = available;
let container=document.getElementById("container");
for(let i=0;i<57;i++)
{
    let box=document.createElement("div");
    box.className="box";
    container.appendChild(box);
}
let boxes=document.querySelectorAll(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.classList.contains("selected"))
        {
            box.classList.remove("selected");
            booked--;
            Remaining++;
            document.getElementById("booked").innerHTML = booked;
            document.getElementById("available").innerHTML = available;
        }
        else{
            box.classList.add("selected");
            booked++;
            Remaining--;
            document.getElementById("booked").innerHTML = booked;
            document.getElementById("available").innerHTML = available;
        }
    })
})
