function setActiveClass(nodeList, index, withCount) {
    [].forEach.call(nodeList, function (node, i) {
        if (i === index) {
            if (withCount) {
                document.querySelector('[data-slider-count-prev]').textContent = i + 1;
            }
            node.classList.add('active');
        } else {
            if (withCount) {
                document.querySelector('[data-slider-count-next]').textContent = nodeList.length;
            }
            node.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var canvasNodeList = document.querySelectorAll('[data-slider-canvas]');
    var canvasCaseNodeList = document.querySelectorAll('[data-slider-canvas-case]');
    var targetNext = document.querySelector('[data-slider-next]');
    var targetPrev = document.querySelector('[data-slider-prev]');
    var targetTop = document.querySelector('[data-slider-top]');
    var targetBottom = document.querySelector('[data-slider-bottom]');
    var canvasIndex = 0;
    var canvasCaseIndex = [...Array(canvasNodeList.length)].map(() => 0);

    function getChildrenCaseNodeList() {
        return canvasNodeList[canvasIndex].querySelectorAll('[data-slider-canvas-case]');
    }

    function setTargetClass() {
        if (canvasIndex === 0) {
            targetPrev.classList.add('disable');
            targetNext.classList.remove('disable');
        } else if (canvasIndex === canvasNodeList.length - 1) {
            targetPrev.classList.remove('disable');
            targetNext.classList.add('disable');
        } else {
            targetPrev.classList.remove('disable');
            targetNext.classList.remove('disable');
        }

        const caseNodeList = getChildrenCaseNodeList();

        if (caseNodeList.length > 1) {
            if (canvasCaseIndex[canvasIndex] === 0) {
                targetTop.classList.add('disable');
                targetBottom.classList.remove('disable');
            } else if (canvasCaseIndex[canvasIndex] === caseNodeList.length - 1) {
                targetTop.classList.remove('disable');
                targetBottom.classList.add('disable');
            } else {
                targetTop.classList.remove('disable');
                targetBottom.classList.remove('disable');
            }
        } else {
            targetTop.classList.add('disable');
            targetBottom.classList.add('disable');
        }
    }

    function slideToNext() {
        if (canvasIndex >= canvasNodeList.length - 1) {
            return false;
        }
        setActiveClass(canvasNodeList, ++canvasIndex, true);
        setTargetClass();
    }

    function slideToPrev() {
        if (canvasIndex <= 0) {
            return false;
        }
        setActiveClass(canvasNodeList, --canvasIndex, true);
        setTargetClass();
    }

    function slideToBottom() {
        const nideList = getChildrenCaseNodeList();
        if (canvasCaseIndex[canvasIndex] >= nideList.length - 1) {
            return false;
        }

        canvasCaseIndex[canvasIndex] = canvasCaseIndex[canvasIndex] + 1;

        setActiveClass(getChildrenCaseNodeList(), canvasCaseIndex[canvasIndex]);
        setTargetClass();
    }

    function slideToTop() {
        if (canvasCaseIndex[canvasIndex] <= 0) {
            return false;
        }

        canvasCaseIndex[canvasIndex] = canvasCaseIndex[canvasIndex] - 1;

        setActiveClass(getChildrenCaseNodeList(), canvasCaseIndex[canvasIndex]);
        setTargetClass();
    }

    setTargetClass();
    setActiveClass(canvasNodeList, canvasIndex, true);
    setActiveClass(canvasCaseNodeList, canvasCaseIndex[canvasIndex]);

    targetNext.addEventListener('click', function (e) {
        slideToNext();
    });

    targetPrev.addEventListener('click', function (e) {
        slideToPrev();
    });

    targetBottom.addEventListener('click', function (e) {
        slideToBottom();
    });

    targetTop.addEventListener('click', function (e) {
        slideToTop();
    });

    document.onkeyup = function (e) {
        if (e.keyCode === 37) {
            slideToPrev();
            targetPrev.classList.remove('active');
        } else if (e.keyCode === 39) {
            slideToNext();
            targetNext.classList.remove('active');
        } else if (e.keyCode === 40) {
            slideToBottom();
            targetBottom.classList.remove('active');
        } else if (e.keyCode === 38) {
            slideToTop();
            targetTop.classList.remove('active');
        }
    };

    document.onkeydown = function (e) {
        if (e.keyCode === 37) {
            targetPrev.classList.add('active');
        } else if (e.keyCode === 39) {
            targetNext.classList.add('active');
        } else if (e.keyCode === 40) {
            targetBottom.classList.add('active');
        } else if (e.keyCode === 38) {
            targetTop.classList.add('active');
        }
    };
});
