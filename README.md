# CH-Login phishing simulation

## Warning

Work in Progress! Use at your own risk :-)

## Overview

This Tool is designed to simulate a phishing CH-Login page. You can use it to test employees using CH-Login on a daily basis if they fall for a phishing attack.

## Deployment

### Settings

You can modify the .env File in the folder "simulation-backend".

- `PORT`: Port where the backend is listening to
- `MONGO_URI`: Connection string to your MongoDB instance
- `ADMIN_USERNAME`: Username of the User who can access the logged attempts
- `ADMIN_PASSWORD`: Password for the above user to access the logged attempts

### Build Docker image

To create a new Docker Image, run: `./build-script.sh`

### Run docker container

You can run the newly created image by running `docker run -p 3000:3000 aerosecgeek/ch-login-phishing-simulation`

## Disclaimer

This phishing simulation tool is intended solely for educational and testing purposes. It is designed to simulate phishing attacks in a controlled environment to assess and improve awareness of phishing risks among users. The use of this tool for any malicious, unethical, or illegal activities is strictly prohibited. By using this tool, you agree that you understand its intended purpose and will only use it in accordance with applicable laws and ethical standards. The creators and developers of this tool are not liable for any misuse or damage caused by its improper or illegal use.
