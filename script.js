function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        }
    }
    return arr;
    }

function sortNumbers() {
    var inputElement = document.getElementById("numbers");
    var resultElement = document.getElementById("result");
    var numbers = inputElement.value.split(",").map(function(item) {
    return parseInt(item.trim(), 10);
    });

    if (numbers.length === 0 || isNaN(numbers[0])) {
        resultElement.innerHTML = "Por favor, insira números válidos.";
        return;
        }
    
    var sortedNumbers = bubbleSort(numbers);
        resultElement.innerHTML = "Números ordenados: " + sortedNumbers.join(", ");
    }