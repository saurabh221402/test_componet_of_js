//test1

let box=document.getElementById("testOne");

box.onclick = (e) => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let new_div= document.createElement("div");
    new_div.style.left=`${(e.clientX*100)/w }vw`;
    new_div.style.top=`${(e.clientY*100)/h }vh`;
    new_div.style.width="10vh";
    new_div.style.height="10vh";
    let node=document.getElementById("testOne");
    console.log(e);
    node.append(new_div);
}

//test2
