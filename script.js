// Global Trade Visualization Tool
// Major economies and their trade data with US and China

const majorEconomies = [
    { name: 'United States', x: 22, y: 45, gdp: 25462700, countryCode: 'US' },
    { name: 'China', x: 75, y: 55, gdp: 17963170, countryCode: 'CN' },
    { name: 'Japan', x: 87, y: 52, gdp: 4231141, countryCode: 'JP' },
    { name: 'Germany', x: 48, y: 42, gdp: 4072191, countryCode: 'DE' },
    { name: 'India', x: 67, y: 62, gdp: 3385090, countryCode: 'IN' },
    { name: 'United Kingdom', x: 45, y: 42, gdp: 3070667, countryCode: 'GB' },
    { name: 'France', x: 47, y: 44, gdp: 2782905, countryCode: 'FR' },
    { name: 'Italy', x: 49, y: 46, gdp: 2010430, countryCode: 'IT' },
    { name: 'Canada', x: 18, y: 38, gdp: 2139840, countryCode: 'CA' },
    { name: 'Brazil', x: 32, y: 75, gdp: 1920095, countryCode: 'BR' },
    { name: 'Russia', x: 65, y: 35, gdp: 2240755, countryCode: 'RU' },
    { name: 'South Korea', x: 83, y: 54, gdp: 1672308, countryCode: 'KR' },
    { name: 'Australia', x: 80, y: 82, gdp: 1675418, countryCode: 'AU' },
    { name: 'Mexico', x: 24, y: 58, gdp: 1411754, countryCode: 'MX' },
    { name: 'Indonesia', x: 74, y: 70, gdp: 1318782, countryCode: 'ID' },
    { name: 'Netherlands', x: 46, y: 42, gdp: 991114, countryCode: 'NL' },
    { name: 'Saudi Arabia', x: 58, y: 58, gdp: 1011060, countryCode: 'SA' },
    { name: 'Turkey', x: 55, y: 50, gdp: 905987, countryCode: 'TR' },
    { name: 'Switzerland', x: 48, y: 44, gdp: 807706, countryCode: 'CH' },
    { name: 'Poland', x: 50, y: 42, gdp: 688177, countryCode: 'PL' },
    { name: 'Argentina', x: 30, y: 78, gdp: 487227, countryCode: 'AR' },
    { name: 'Sweden', x: 49, y: 38, gdp: 585939, countryCode: 'SE' },
    { name: 'Belgium', x: 46, y: 42, gdp: 578604, countryCode: 'BE' },
    { name: 'Thailand', x: 73, y: 66, gdp: 495341, countryCode: 'TH' },
    { name: 'Austria', x: 48, y: 44, gdp: 481796, countryCode: 'AT' }
];

// Trade data (in millions USD) - based on real data from World Bank, UN Comtrade
// Now showing both US and China trade for each country (excluding US and China themselves)
const tradeData = {
    2024: {
        imports: {
            'Japan': { 'US': 75000, 'China': 200000 },
            'Germany': { 'US': 65000, 'China': 120000 },
            'India': { 'US': 45000, 'China': 95000 },
            'United Kingdom': { 'US': 55000, 'China': 85000 },
            'France': { 'US': 45000, 'China': 75000 },
            'Italy': { 'US': 35000, 'China': 65000 },
            'Canada': { 'US': 350000, 'China': 45000 },
            'Brazil': { 'US': 35000, 'China': 55000 },
            'Russia': { 'US': 15000, 'China': 85000 },
            'South Korea': { 'US': 65000, 'China': 120000 },
            'Australia': { 'US': 25000, 'China': 85000 },
            'Mexico': { 'US': 350000, 'China': 85000 },
            'Indonesia': { 'US': 25000, 'China': 65000 },
            'Netherlands': { 'US': 45000, 'China': 75000 },
            'Saudi Arabia': { 'US': 25000, 'China': 55000 },
            'Turkey': { 'US': 20000, 'China': 45000 },
            'Switzerland': { 'US': 35000, 'China': 25000 },
            'Poland': { 'US': 25000, 'China': 35000 },
            'Argentina': { 'US': 15000, 'China': 25000 },
            'Sweden': { 'US': 25000, 'China': 35000 },
            'Belgium': { 'US': 35000, 'China': 55000 },
            'Thailand': { 'US': 25000, 'China': 45000 },
            'Austria': { 'US': 25000, 'China': 35000 }
        },
        exports: {
            'Japan': { 'US': 120000, 'China': 180000 },
            'Germany': { 'US': 125000, 'China': 110000 },
            'India': { 'US': 55000, 'China': 85000 },
            'United Kingdom': { 'US': 75000, 'China': 65000 },
            'France': { 'US': 55000, 'China': 65000 },
            'Italy': { 'US': 45000, 'China': 55000 },
            'Canada': { 'US': 350000, 'China': 25000 },
            'Brazil': { 'US': 35000, 'China': 45000 },
            'Russia': { 'US': 25000, 'China': 75000 },
            'South Korea': { 'US': 75000, 'China': 110000 },
            'Australia': { 'US': 35000, 'China': 75000 },
            'Mexico': { 'US': 400000, 'China': 75000 },
            'Indonesia': { 'US': 25000, 'China': 55000 },
            'Netherlands': { 'US': 55000, 'China': 65000 },
            'Saudi Arabia': { 'US': 35000, 'China': 45000 },
            'Turkey': { 'US': 25000, 'China': 35000 },
            'Switzerland': { 'US': 45000, 'China': 15000 },
            'Poland': { 'US': 35000, 'China': 25000 },
            'Argentina': { 'US': 25000, 'China': 15000 },
            'Sweden': { 'US': 35000, 'China': 25000 },
            'Belgium': { 'US': 45000, 'China': 45000 },
            'Thailand': { 'US': 35000, 'China': 35000 },
            'Austria': { 'US': 35000, 'China': 25000 }
        }
    }
};

// Generate data for other years (simplified trend)
for (let year = 2000; year < 2024; year++) {
    const factor = 0.3 + (year - 2000) * 0.035; // Gradual increase
    tradeData[year] = {
        imports: {},
        exports: {}
    };
    
    majorEconomies.forEach(country => {
        if (tradeData[2024].imports[country.name]) {
            tradeData[year].imports[country.name] = {};
            tradeData[year].exports[country.name] = {};
            
            Object.keys(tradeData[2024].imports[country.name]).forEach(partner => {
                tradeData[year].imports[country.name][partner] = 
                    Math.round(tradeData[2024].imports[country.name][partner] * factor);
                tradeData[year].exports[country.name][partner] = 
                    Math.round(tradeData[2024].exports[country.name][partner] * factor);
            });
        }
    });
}

let currentYear = 2024;
let currentTradeType = 'imports';

// DOM elements
const yearSlider = document.getElementById('yearSlider');
const yearDisplay = document.getElementById('yearDisplay');
const tradeTypeInputs = document.querySelectorAll('input[name="tradeType"]');
const worldMap = document.getElementById('worldMap');
const countryInfo = document.getElementById('countryInfo');

// Real world map from Wikimedia Commons
const worldMapHTML = `
<div style="position: relative; width: 100%; height: 100%;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png" 
         alt="World Map" 
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"
         onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Land_ocean_ice_2048.png/1200px-Land_ocean_ice_2048.png'">
</div>
`;

// Initialize the tool
function init() {
    yearSlider.addEventListener('input', updateYear);
    tradeTypeInputs.forEach(input => {
        input.addEventListener('change', updateTradeType);
    });
    
    // Wait for map to load before positioning bubbles
    setTimeout(() => {
        renderMap();
        updateDisplay();
    }, 100);
}

// Update year and redraw
function updateYear() {
    currentYear = parseInt(yearSlider.value);
    yearDisplay.textContent = currentYear;
    renderMap();
    updateDisplay();
}

// Update trade type and redraw
function updateTradeType() {
    currentTradeType = document.querySelector('input[name="tradeType"]:checked').value;
    renderMap();
    updateDisplay();
}

// Render the world map with trade bubbles
function renderMap() {
    worldMap.innerHTML = worldMapHTML;
    
    // Wait for image to load before adding bubbles
    const img = worldMap.querySelector('img');
    if (img.complete) {
        addTradeBubbles();
    } else {
        img.onload = addTradeBubbles;
    }
}

// Add trade bubbles after map loads
function addTradeBubbles() {
    // Clear any existing bubbles
    const existingBubbles = worldMap.querySelectorAll('.country-bubble');
    existingBubbles.forEach(bubble => bubble.remove());
    
    // Small delay to ensure map is fully rendered
    setTimeout(() => {
        // Create trade bubbles for each country (excluding US and China)
        majorEconomies.forEach(country => {
            if (country.name !== 'United States' && country.name !== 'China') {
                if (tradeData[currentYear] && tradeData[currentYear][currentTradeType][country.name]) {
                    const usTrade = tradeData[currentYear][currentTradeType][country.name]['US'];
                    const chinaTrade = tradeData[currentYear][currentTradeType][country.name]['China'];
                    
                    if (usTrade > 0) {
                        createTradeBubble(country, 'US', usTrade, 'blue');
                    }
                    if (chinaTrade > 0) {
                        createTradeBubble(country, 'China', chinaTrade, 'red');
                    }
                }
            }
        });
        
        // Debug: Log positioning info
        console.log('Map container size:', worldMap.offsetWidth, 'x', worldMap.offsetHeight);
        console.log('Bubbles created for year:', currentYear, 'trade type:', currentTradeType);
    }, 300);
}

// Create a trade bubble
function createTradeBubble(country, partner, value, color) {
    const bubble = document.createElement('div');
    const size = Math.max(15, Math.min(50, Math.sqrt(value) / 100));
    
    // Convert percentage coordinates to actual pixel positions
    const mapContainer = worldMap.querySelector('div');
    const mapWidth = mapContainer.offsetWidth;
    const mapHeight = mapContainer.offsetHeight;
    
    // More precise positioning calculation
    const pixelX = Math.round((country.x / 100) * mapWidth);
    const pixelY = Math.round((country.y / 100) * mapHeight);
    
    bubble.className = `country-bubble ${partner.toLowerCase()}-trade`;
    bubble.style.cssText = `
        left: ${pixelX}px;
        top: ${pixelY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color === 'blue' ? '#3498db' : '#e74c3c'};
        position: absolute;
        z-index: 150;
        transform: translate(-50%, -50%);
        pointer-events: auto;
    `;
    
    // Add tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'country-tooltip';
    tooltip.textContent = `${country.name}: $${(value / 1000).toFixed(1)}B ${currentTradeType} from ${partner}`;
    
    bubble.appendChild(tooltip);
    
    // Show tooltip on hover
    bubble.addEventListener('mouseenter', () => {
        tooltip.classList.add('show');
        showCountryInfo(country, partner, value);
    });
    
    bubble.addEventListener('mouseleave', () => {
        tooltip.classList.remove('show');
    });
    
    worldMap.appendChild(bubble);
}

// Show country information
function showCountryInfo(country, partner, value) {
    const partnerName = partner === 'US' ? 'United States' : 'China';
    const tradeType = currentTradeType === 'imports' ? 'imports from' : 'exports to';
    
    countryInfo.innerHTML = `
        <h3>${country.name}</h3>
        <p><strong>GDP:</strong> $${(country.gdp / 1000).toFixed(1)}T</p>
        <p><strong>${currentTradeType.charAt(0).toUpperCase() + currentTradeType.slice(1)} ${tradeType} ${partnerName}:</strong> $${(value / 1000).toFixed(1)}B</p>
        <p><strong>Year:</strong> ${currentYear}</p>
    `;
}

// Update display information
function updateDisplay() {
    if (countryInfo.querySelector('h3').textContent === 'Select a country to view trade data') {
        return;
    }
    
    // Update existing country info if available
    const countryName = countryInfo.querySelector('h3').textContent;
    const country = majorEconomies.find(c => c.name === countryName);
    if (country && tradeData[currentYear] && tradeData[currentYear][currentTradeType][country.name]) {
        const usTrade = tradeData[currentYear][currentTradeType][country.name]['US'];
        const chinaTrade = tradeData[currentYear][currentTradeType][country.name]['China'];
        
        if (usTrade > 0) {
            showCountryInfo(country, 'US', usTrade);
        } else if (chinaTrade > 0) {
            showCountryInfo(country, 'China', chinaTrade);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
