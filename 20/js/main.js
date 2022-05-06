let prevAf, prevTo, prevMt, prevPup;

function af() {
    const now = Date.now();
    // document.title = reverse(now);
    console.log('af', now - prevAf);
    prevAf = now;
    requestAnimationFrame(af);
}

function to() {
    const now = Date.now();
    console.log('to', now - prevTo);
    prevTo = now;
    setTimeout(to);
}

function mt() {
    const now = Date.now();
    console.log('mt', now - prevMt);
    prevMt = now;
    queueMicrotask(mt);
}

function logPuppeteer() {
    const now = Date.now();
    console.log("Puppeteer", now - prevPup);
    prevPup = now;
}

logBtn.addEventListener("click", logPuppeteer);

af();
//to();
//mt();