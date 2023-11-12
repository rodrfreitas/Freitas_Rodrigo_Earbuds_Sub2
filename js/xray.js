(() => {
    
    //variables
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

    function onDown() {
        dragging = true;
        console.log("onDown called");
    }

    function onUp() {
        dragging = false;
        console.log("onUp called");
    }

    function onMove(event) {
        if(dragging) {
            let x = event.clientX - imageCon.getBoundingClientRect().left;

            if(x < min) {
                x = min;
            } else if(x > max) {
                x = max - 10;
            }

            drag.style.left = x + 'px';
            left.style.width = x + 'px';
        }
    }

    //event listeners
    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove', onMove);


})();