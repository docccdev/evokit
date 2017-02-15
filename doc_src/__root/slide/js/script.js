function setActiveClass(nodeList, index) {
    [].forEach.call(nodeList, function(node, i) {
        if (i === index) {
            document.querySelector("[data-slider-count-prev]").textContent = i + 1;
            node.classList.add('active');
        } else {
            document.querySelector("[data-slider-count-next]").textContent = nodeList.length;
            node.classList.remove('active');
        }
    });
}


document.addEventListener("DOMContentLoaded", function(){
    var nodeList = document.querySelectorAll("[data-slider-case]");
    var targetNext = document.querySelector("[data-slider-next]");
    var targetPrev = document.querySelector("[data-slider-prev]");
    var index = 0;


    function slideToNext() {
        if (index >= nodeList.length-1) {
            return false;
        }
        setActiveClass(nodeList, ++index);
    }

    function slideToPrev() {
        if (index <= 0) {
            return false;
        }
        setActiveClass(nodeList, --index);
    }

    setActiveClass(nodeList, index);

    targetNext.addEventListener("click", function(e) {
        slideToNext();
    });

    targetPrev.addEventListener("click", function(e) {
        slideToPrev();
    });

    document.onkeyup = function(e) {
        if (e.keyCode === 37) {
            slideToPrev();
            targetPrev.classList.remove('active');
        }
        if (e.keyCode === 39) {
            slideToNext();
            targetNext.classList.remove('active');
        }
    }

    document.onkeydown = function(e) {
        if (e.keyCode === 37) {
            targetPrev.classList.add('active');
        }
        if (e.keyCode === 39) {
            targetNext.classList.add('active');
        }
    }
});
