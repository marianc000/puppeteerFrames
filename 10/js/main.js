let prevAf,  prevPup;

function af() {
    const now = Date.now();
    console.log('af', now - prevAf);
    prevAf = now;
    requestAnimationFrame(af);
}
 
function puppeteer() {
    const now = Date.now();
    console.log("Puppeteer", now - prevPup);
    prevPup = now;
}

logBtn.addEventListener("click", puppeteer);

af();
 