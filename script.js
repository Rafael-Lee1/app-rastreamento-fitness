// script.js
let tracking = false;
let startTime = 0;
let endTime = 0;

document.getElementById("startButton").addEventListener("click", startTracking);
document.getElementById("stopButton").addEventListener("click", stopTracking);

function startTracking() {
    tracking = true;
    startTime = Date.now();
}

function stopTracking() {
    if (tracking) {
        tracking = false;
        endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // em segundos
        const distance = calculateDistance(elapsedTime);
        document.getElementById("distance").textContent = `${distance.toFixed(2)} km`;
        document.getElementById("time").textContent = `${elapsedTime} segundos`;
    }
}

function calculateDistance(elapsedTime) {
    // Simplesmente uma simulação de cálculo de distância.
    // Pode ser mais complexo em uma implementação real.
    return elapsedTime * 0.1; // Exemplo: 0.1 km por segundo
}
