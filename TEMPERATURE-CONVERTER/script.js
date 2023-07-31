function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const celsius = parseFloat(celsiusInput.value);
  
    if (isNaN(celsius)) {
      alert('Please enter a valid number for Celsius temperature.');
      return;
    }
  
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerText = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
  }
  