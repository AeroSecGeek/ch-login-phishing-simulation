#!/bin/bash

# Exit script on any error
set -e

# Build the React app
echo "Building React app..."
cd simulation-ui
pnpm install
pnpm run build
cd ..

# Remove old frontend build in backend public folder, if any
echo "Cleaning up old frontend build in backend..."
rm -rf backend/public/*

# Copy the new React build to the backend public folder
echo "Copying new frontend build to backend..."
cp -r simulation-ui/dist/* simulation-backend/public/

# Build the Docker image
echo "Building Docker image..."
cd simulation-backend
docker build -t aerosecgeek/ch-login-phishing-simulation .

echo "Build script completed successfully."