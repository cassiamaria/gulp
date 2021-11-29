window.onload = function() {
    document.getElementById("calculate")
        .addEventListener('click', () => {
            const numberOne = parseFloat(document.getElementById('numberOne').value);
            const numberTwo = parseFloat(document.getElementById('numberTwo').value);

            if(numberOne >= 0 && numberTwo >= 0) {
                const result = numberOne + numberTwo;
                document.getElementById('result').innerHTML = result;
            }
        })
}