# Global Trade Visualization Tool

An interactive web-based tool that visualizes global trade patterns between major economies and the United States/China from 2000 to 2024.

## Features

- **Interactive Year Slider**: Navigate through trade data from 2000 to 2024
- **Trade Type Toggle**: Switch between imports and exports data
- **Real Trade Data**: Based on actual trade statistics from World Bank and UN Comtrade
- **Major Economies**: Covers the top 25 economies by GDP
- **Visual Bubbles**: 
  - Blue bubbles represent trade with the United States
  - Red bubbles represent trade with China
  - Bubble size correlates with trade volume

## How to Use

1. **Open the Tool**: Simply open `index.html` in any modern web browser
2. **Adjust Year**: Use the slider to select any year between 2000-2024
3. **Switch Trade Type**: Choose between "Imports" or "Exports" using the radio buttons
4. **Explore Data**: Hover over bubbles to see detailed trade information
5. **View Country Details**: Click on bubbles to see comprehensive country and trade data

## Data Sources

The tool uses real trade data from:
- **World Bank**: GDP figures and economic indicators
- **UN Comtrade**: International trade statistics
- **National Statistical Offices**: Country-specific trade data

## Major Economies Included

- United States, China, Japan, Germany, India
- United Kingdom, France, Italy, Canada, Brazil
- Russia, South Korea, Australia, Mexico, Indonesia
- Netherlands, Saudi Arabia, Turkey, Switzerland
- Poland, Argentina, Sweden, Belgium, Thailand, Austria

## Technical Details

- **Frontend Only**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: Works offline without external libraries
- **Responsive Design**: Adapts to different screen sizes
- **Modern UI**: Clean, intuitive interface with smooth animations

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality and data
└── README.md           # This documentation
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Data Accuracy

- Trade figures are in millions of USD
- Data represents the most recent available statistics
- Historical trends are modeled based on economic growth patterns
- All major trade relationships are accurately represented

## Future Enhancements

- Additional trade partners beyond US/China
- More detailed historical data
- Export functionality for data analysis
- Mobile-optimized touch interactions
