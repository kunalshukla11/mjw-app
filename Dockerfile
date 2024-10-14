# Use an official Node.js image as a base
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose the port that the application will use
EXPOSE 3000

# Run the command to start the development server
CMD ["yarn", "dev"]