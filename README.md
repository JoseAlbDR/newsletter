# Newsletter sign up

Project description

[![Project Status](https://img.shields.io/badge/status-in%20progress-brightgreen)](https://github.com/JoseAlbDR/newsletter/)

> A web application built with Express and MailChimp API.

## Technologies Used

- ![Express](https://img.shields.io/badge/-Express-lightgrey)
- ![Body Parser](https://img.shields.io/badge/-Body%20Parser-yellow)
- ![Request](https://img.shields.io/badge/-Request-blue)
- ![MailChimp Marketing](https://img.shields.io/badge/-MailChimp%20Marketing-green)
- ![HTTPS](https://img.shields.io/badge/-HTTPS-orange)

## Features

- Handles POST requests and collects form data.
- Communicates with the MailChimp API to add subscribers.
- Provides success and error pages based on API response.
- Serves static files such as HTML, CSS, and client-side JavaScript.

## Installation

1. Clone the repository: `git clone https://github.com/JoseAlbDR/newsletter.git`
2. Change to the project directory: `cd project-directory`
3. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the application in a web browser: `http://localhost:3000`

## Configuration

1. Obtain a MailChimp API key and audience ID.
2. Create a `config.js` file in the `private` directory.
3. Update the `AUDIENCE_ID` and `API_KEY` and `PREFIX`variables to yours in `config.js`.

## API Integration

1. When a POST request is made to the root route, the server collects the form data.
2. The server uses the MailChimp API to add the subscriber with the provided data.
3. If the API response indicates success, the server serves the success page.
4. If the API response indicates an error, the server serves the error page.

## Contribution

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`
3. Make changes and commit: `git commit -am 'Add new feature'`
4. Push the branch: `git push origin new-feature`
5. Create a pull request on GitHub.


