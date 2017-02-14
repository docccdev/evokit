function setActiveClass(nodeList, index) {
    [].forEach.call(nodeList, function(node, i) {
        if (i === index) {
            document.querySelector("[data-slider-prev]").textContent = i + 1;
            node.classList.add('active');
        } else {
            document.querySelector("[data-slider-next]").textContent = nodeList.length;
            node.classList.remove('active');
        }
    });
}


document.addEventListener("DOMContentLoaded", function(){
    var nodeList = document.querySelectorAll("[data-slider-case]");
    var index = 0;

    setActiveClass(nodeList, index);

    document.onkeyup = function(e) {
        if (e.keyCode === 37) {
            if (index <= 0) {
                return false;
            }
            setActiveClass(nodeList, --index);
        }
        if (e.keyCode === 39) {
            if (index >= nodeList.length-1) {
                return false;
            }
            setActiveClass(nodeList, ++index);
        }
    }
});
