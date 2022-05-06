const html=await fetch( './editView.html' ).then(response => response.text());
    
editBtn.addEventListener("click", editView);

async function editView(){
    console.log(">editView");
    rootDiv.innerHTML=html;
    requestAnimationFrame(()=>textArea.style.height=textArea.scrollHeight + "px");
}

saveBtn.addEventListener("click", ()=>console.log(">save"));
