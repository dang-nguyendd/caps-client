# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the source code to the working directory
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]