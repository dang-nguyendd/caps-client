# Stage 1: Build the Next.js application
FROM node:14-alpine AS build

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app

# Copy package and package-lock
COPY package.json package-lock.json ./

# Clean install dependencies based package-lock
# Note: We also install dev deps as TypeScript may be needed
RUN npm ci

# Copy files
# Use .dockerignore to avoid copying node_modules and others folders and files
COPY . .

# Build application
RUN npm run build

#RUN npm install -g @aws-amplify/cli

# Stage 2: Create the final image
FROM node:14-alpine

# Mark as prod, disable telemetry, set port
ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

# Set up the app directory
WORKDIR /app

# Copy from build
COPY --from=build /app/next.config.js .
COPY --from=build /app/public/ ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json .
COPY --from=build /app/package-lock.json .

# Install app dependencies
RUN npm ci --production

EXPOSE 3000

# Run app command
CMD ["node_modules/.bin/next", "start"]
