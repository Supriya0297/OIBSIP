const calTemp = () => {
    const inputTemp = document.getElementById('temperature').value;

    const tempSelected = document.getElementById('temperature_diff');
    const valueTemp = temperature_diff.options[tempSelected.selectedIndex].value;

    const calToFah = (celsius) => {
        let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(4);
        return fahrenheit;
    }

    const fahToCal = (fahrenheit) => {
        let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(4);
        return celsius;
    }

    if (valueTemp == 'celsius') {
        document.getElementById("result").innerHTML = calToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCal(inputTemp) + "&#176; Celsius";
    }
}