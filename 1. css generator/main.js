var rangeTl = document.getElementById('tlr'),
    rangeTr = document.getElementById('trr'),
    rangeBl = document.getElementById('blr'),
    rangeBr = document.getElementById('brr');

var resultTl = document.getElementById('result-tlr'),
    resultTr = document.getElementById('result-trr'),
    resultBl = document.getElementById('result-blr'),
    resultBr = document.getElementById('result-brr');

var input = document.querySelectorAll('.input');
var cube = document.getElementById('cube');

function changeRadius() {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    
    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px'
}

for(node of input) {
    node.addEventListener('input', changeRadius);
}