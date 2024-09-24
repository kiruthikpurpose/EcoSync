const appliances = {
    1: { name: "Refrigerator", energy: 200, water: 0 },
    2: { name: "Washing Machine", energy: 150, water: 30 },
    3: { name: "Air Conditioner", energy: 350, water: 0 },
    4: { name: "Desert Air Cooler", energy: 80, water: 20 },
};

function populateApplianceGrid() {
    const grid = document.getElementById("appliance-grid");
    Object.values(appliances).forEach(appliance => {
        const card = document.createElement("div");
        card.className = "appliance-card";
        card.innerHTML = `
            <h3>${appliance.name}</h3>
            <p>Energy Consumption: ${appliance.energy} W</p>
            <p>Water Consumption: ${appliance.water} L</p>
        `;
        grid.appendChild(card);
    });
}

function compareAppliances() {
    const appliance1 = document.getElementById("appliance1").value;
    const appliance2 = document.getElementById("appliance2").value;

    if (appliance1 === appliance2) {
        document.getElementById("comparison-result").innerText = "Please select different appliances to compare.";
        document.getElementById("comparison-result").style.display = "block";
        return;
    }

    const data1 = appliances[appliance1];
    const data2 = appliances[appliance2];

    const result = `
        <h3>Comparison Result:</h3>
        <p><strong>${data1.name}</strong> - Energy: ${data1.energy} W, Water: ${data1.water} L</p>
        <p><strong>${data2.name}</strong> - Energy: ${data2.energy} W, Water: ${data2.water} L</p>
    `;

    document.getElementById("comparison-result").innerHTML = result;
    document.getElementById("comparison-result").style.display = "block";
}

function calculateSavings() {
    const usage = document.getElementById("usage").value;
    const rate = document.getElementById("rate").value;

    if (!usage || !rate) {
        alert("Please fill in both fields.");
        return;
    }

    const savings = (usage * rate).toFixed(2);
    document.getElementById("savings-result").innerText = `Estimated Savings: $${savings}`;
}

window.onload = populateApplianceGrid;
