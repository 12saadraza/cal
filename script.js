// Separate functions for each section
function calculatePlantAbsorption() {
    const plantCount = parseFloat(document.getElementById('plantCount').value) || 0;
    const absorptionRate = parseFloat(document.getElementById('absorptionRate').value) || 0;
    return plantCount * absorptionRate;
}

function calculateElectricityEmissions() {
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value) || 0;
    const electricityEmissionFactor = 0.521;
    return electricityUsage * electricityEmissionFactor;
}

function calculateGasEmissions() {
    const gasUsage = parseFloat(document.getElementById('gasUsage').value) || 0;
    const gasEmissionFactor = 2.02266;
    return gasUsage * gasEmissionFactor;
}

function calculateGeneratorEmissions() {
    let totalEmissions = 0;

    // Student Cars Emissions
    const generatorcountCarCount = parseFloat(document.getElementById('Generatorcount').value) || 0;
    const generatorfuelconsumption = parseFloat(document.getElementById('consumption').value) || 0;
    const generatorEmissionFactor = 0.5;

    // Calculate emissions from student cars
    totalEmissions += generatorcountCarCount * generatorfuelconsumption * generatorEmissionFactor;
    return totalEmissions;
}


function calculateVehicleEmissions() {
    let totalEmissions = 0;

    // Student Cars Emissions
    const studentCarCount = parseFloat(document.getElementById('studentCarCount').value) || 0;
    const studentCarDistance = parseFloat(document.getElementById('studentCarDistance').value) || 0;
    const studentCarEmissionFactor = 0.5;

    // Calculate emissions from student cars
    totalEmissions += studentCarCount * studentCarDistance * studentCarEmissionFactor;

    // Staff Cars Emissions
    const staffCarCount = parseFloat(document.getElementById('staffCarCount').value) || 0;
    const staffCarMileage = parseFloat(document.getElementById('staffCarMileage').value) || 0;
    const staffCarEmissionFactor = 0.5;

    // Calculate emissions from staff cars
    totalEmissions += staffCarCount * staffCarMileage * staffCarEmissionFactor;

    // Student Bikes Emissions
    const studentBikeCount = parseFloat(document.getElementById('studentBikeCount').value) || 0;
    const studentBikeMileage = parseFloat(document.getElementById('studentBikeMileage').value) || 0;
    const studentBikeEmissionFactor = 0.5;

    // Calculate emissions from student bikes
    totalEmissions += studentBikeCount * studentBikeMileage * studentBikeEmissionFactor;

    // Staff Bikes Emissions
    const staffBikeCount = parseFloat(document.getElementById('staffBikeCount').value) || 0;
    const staffBikeMileage = parseFloat(document.getElementById('staffBikeMileage').value) || 0;
    const staffBikeEmissionFactor = 0.5;

    // Calculate emissions from staff bikes
    totalEmissions += staffBikeCount * staffBikeMileage * staffBikeEmissionFactor;

    // Shuttles Emissions
    const shuttleCount = parseFloat(document.getElementById('shuttleCount').value) || 0;
    const shuttleMileage = parseFloat(document.getElementById('shuttleMileage').value) || 0;
    const shuttleEmissionFactor = 0.5;

    // Calculate emissions from shuttles
    totalEmissions += shuttleCount * shuttleMileage * shuttleEmissionFactor;

    // Tractors Emissions
    const tractorCount = parseFloat(document.getElementById('tractorCount').value) || 0;
    const tractorMileage = parseFloat(document.getElementById('tractorMileage').value) || 0;
    const tractorEmissionFactor =0.5;

    // Calculate emissions from tractors
    totalEmissions += tractorCount * tractorMileage * tractorEmissionFactor;

    return totalEmissions;
}

function calculateNetCarbonFootprint() {
    const totalVehicleEmissions = calculateVehicleEmissions();
    const totalGeneratorEmissions = calculateGeneratorEmissions();
    const totalElectricityEmissions = calculateElectricityEmissions();
    const totalGasEmissions = calculateGasEmissions();
    const totalactivitiesEmissions = calculateVehicleEmissions1();
   

    const netCarbonFootprint = totalVehicleEmissions + totalGeneratorEmissions + totalElectricityEmissions +
        totalGasEmissions + totalWasteEmissions - totalPlantAbsorption;
        document.getElementById('totalactivitiesEmissions').textContent = `Total Activities Emissions: ${totalactivitiesEmissions.toFixed(2)} kg CO2`;
    document.getElementById('totalVehicleEmissions').textContent = `Total Vehicle Emissions: ${totalVehicleEmissions.toFixed(2)} kg CO2`;   
    document.getElementById('totalGeneratorEmissions').textContent = `Total Generator: ${totalGeneratorEmissions.toFixed(2)} kg CO2`;
    document.getElementById('totalElectricityEmissions').textContent = `Total Electricity Emissions: ${totalElectricityEmissions.toFixed(2)} kg CO2`;
    document.getElementById('totalGasEmissions').textContent = `Total Gas Emissions: ${totalGasEmissions.toFixed(2)} kg CO2`;
    document.getElementById('netCarbonFootprint').textContent = `Net Carbon Footprint: ${netCarbonFootprint.toFixed(2)} kg CO2`;
}

// Update calculations live
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', calculateNetCarbonFootprint);
});

// Button click calculation
document.getElementById('calculateButton').addEventListener('click', calculateNetCarbonFootprint);
// Separate functions for each section (as previously defined)
// ... (existing functions like calculatePlantAbsorption, calculateElectricityEmissions, etc.)

function calculateNetCarbonFootprint() {
    const totalVehicleEmissions = calculateVehicleEmissions();
    const totalGeneratorEmissions = calculateGeneratorEmissions();
    const totalElectricityEmissions = calculateElectricityEmissions();
    const totalGasEmissions = calculateGasEmissions();
   
    const netCarbonFootprint = totalVehicleEmissions + totalGeneratorEmissions + totalElectricityEmissions + 
        totalGasEmissions 

    // Update the DOM with live results
    document.getElementById('totalVehicleEmissions').textContent = `Total Vehicle Emissions: ${totalVehicleEmissions.toFixed(2)} kg CO2`;
    document.getElementById('totalGeneratorEmissions').textContent = `Total Generator: ${totalGeneratorEmissions.toFixed(2)} kg CO2`;
   document.getElementById('totalElectricityEmissions').textContent = `Total Electricity Emissions: ${totalElectricityEmissions.toFixed(2)} kg CO2`;
    document.getElementById('totalGasEmissions').textContent = `Total Gas Emissions: ${totalGasEmissions.toFixed(2)} kg CO2`;
   document.getElementById('netCarbonFootprint').textContent = `Net Carbon Footprint: ${netCarbonFootprint.toFixed(2)} kg CO2`;

    return netCarbonFootprint; // Return the net carbon footprint for storage
}

// Button click calculation with local storage
document.getElementById('calculateButton').addEventListener('click', function() {
    const netCarbonFootprint = calculateNetCarbonFootprint();

    // Store results in local storage
    localStorage.setItem('totalVehicleEmissions', document.getElementById('totalVehicleEmissions').textContent);
    localStorage.setItem('totalGeneratorEmissions', document.getElementById('totalGeneratorEmissions').textContent);
    localStorage.setItem('totalElectricityEmissions', document.getElementById('totalElectricityEmissions').textContent);
    localStorage.setItem('totalGasEmissions', document.getElementById('totalGasEmissions').textContent);
    localStorage.setItem('netCarbonFootprint', document.getElementById('netCarbonFootprint').textContent);

    // Optionally, navigate to the overall report page
    window.location.href = 'overall.html';
});

// Update calculations live
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', calculateNetCarbonFootprint);
});
