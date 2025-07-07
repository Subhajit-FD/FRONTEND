const box = document.querySelector("#box");

box.addEventListener("mousedown", (e) => {
    let offsetX = e.clientX - box.getBoundingClientRect().left;
    let offsetY = e.clientY - box.getBoundingClientRect().top;

    const mouseMoveHandler = (e) => {
        box.style.left = `${e.clientX - offsetX}px`;
        box.style.top = `${e.clientY - offsetY}px`;
    }   

    const mouseUpHandler = () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    e.preventDefault(); // Prevent text selection
    return false; // Prevent default action

});
