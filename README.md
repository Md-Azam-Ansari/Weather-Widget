# Weather Widget

A simple web application that allows users to check the weather for a specified city.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [How to Use](#how-to-use)
- [API Key](#api-key)
- [Technologies Used](#technologies-used)
- [Concepts Covered](#concepts-covered)

## Demo

## Features

- Search for weather information by city name.
- Display temperature, humidity, wind speed, and weather condition.
- Dynamic weather icon based on the current weather condition.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- You will need a code editor, such as Visual Studio Code.
- Ensure you have a modern web browser installed.
- Create an account on [OpenWeatherMap](https://openweathermap.org/) to get an API key.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Md-Azam-Ansari/Weather-Widget.git
   ```
2. Open the project folder in your code editor.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter a city name in the input field.
3. Click the "Search" button to retrieve weather information.

## API Key

This project uses the OpenWeatherMap API to fetch weather data. You will need to sign up on their website and obtain an API key. Once you have the key, replace `YOUR_API_KEY` in `weather.js` with your actual API key.

```sh
let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityvalue.value + '&units=metric&appid=YOUR_API_KEY';
```

## Technologies Used

- HTML
- CSS
- JavaScript

## Concepts Covered

Here are the key concepts covered in the project:

1. **HTML Structure**: The project uses HTML to create the structure of the web page, defining elements like headings, input fields, buttons, and images.

2. **CSS Styling**: CSS is applied to style the HTML elements, including setting background images, font styles, colors, padding, and margins to create an aesthetically pleasing user interface.

3. **JavaScript Programming**: JavaScript is used to provide interactivity to the web page. It handles user input, makes API requests, and dynamically updates the content on the page without requiring a full page refresh.

4. **API Integration**: The project integrates with the OpenWeatherMap API to fetch weather data for a specified city. This demonstrates how to work with external APIs to retrieve data and display it on a web page.

5. **User Input Handling**: The project accepts user input in the form of a city name entered into an input field and uses that input to make API requests.

6. **DOM Manipulation**: JavaScript is used to interact with the Document Object Model (DOM) to update the content of the web page in real-time. Elements such as temperature, humidity, wind speed, and weather conditions are dynamically updated.

7. **Event Handling**: The project uses event handling to trigger actions when the user clicks the "Search" button, ensuring a smooth user experience.

8. **Error Handling**: The JavaScript code includes error handling to provide feedback to the user if they enter an invalid city name or if there are issues with the API request.

9. **Responsive Design**: While not explicitly mentioned in your code, responsive design principles can be applied to make the web page adapt to different screen sizes and devices.

10. **Version Control**: The project demonstrates version control using Git, as you can clone the project from a Git repository. It's a good practice for collaborating with others and tracking changes to your code.

11. **GitHub Repository**: The project is hosted on GitHub, showcasing how to share your code and collaborate with others in an open-source manner.
