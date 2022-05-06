const html = await fetch('./editView.html').then(response => response.text());

editBtn.addEventListener("click", editView);

function recurse(times,func){
    if (times==0){
        return ()=>requestAnimationFrame(func);
    }
    const f=recurse(--times,func);
    return ()=>requestAnimationFrame(f);
}

async function editView() {
    rootDiv.innerHTML = html;
    requestAnimationFrame(() => {
        textArea.style.height = textArea.scrollHeight + "px";
        let f = () => {
            console.log("added");
            saveBtn.addEventListener("click", () => console.log(">save"));
        };
        recurse(10,f)();
        
    });
}
