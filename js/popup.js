editBtn.addEventListener("click", editView);

function editView(){
    popupDiv.style.display = 'block';
    editBtn.style.display = 'none';
    requestAnimationFrame(()=>textArea.style.height=textArea.scrollHeight + "px");
}

 