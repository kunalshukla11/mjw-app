# Base image
FROM node:18-alpine

# Install necessary packages
RUN apk add --no-cache g++ make py3-pip libc6-compat

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json yarn.lock ./

# Install dependencies (including production-only dependencies)
RUN corepack enable && yarn install --immutable

# Copy application files
COPY . .

# Build the Next.js application
RUN yarn build

# Set environment variables
ENV NODE_ENV=production
EXPOSE 3000

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
USER nextjs

# Start the application
CMD ["yarn", "start"]
