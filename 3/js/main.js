const html = await fetch('./editView.html').then(response => response.text());



const params = new URLSearchParams(window.location.search);
const frames = parseInt(params.get('frames') ?? 10);
console.log("frames", frames);

editBtn.addEventListener("click", editView);

function recurse(times, func) {
    if (times === 0) {
        return () => requestAnimationFrame(func);
    }
    const f = recurse(--times, func);
    return () => requestAnimationFrame(f);
}

async function editView() {
    rootDiv.innerHTML = html;
    requestAnimationFrame(() => {
        textArea.style.height = textArea.scrollHeight + "px"; 
        const t0 = Date.now();
        let f = () => {
            saveBtn.addEventListener("click", () => console.log(">save")); 
            console.log((Date.now() - t0) / 1000);
        };
       
        recurse(frames, f)();
    });
}
