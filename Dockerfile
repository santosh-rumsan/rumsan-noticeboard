# Use the official Node.js 18-alpine image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN pnpm build

# Use a lightweight Node.js image for the production environment
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Install pnpm globally in the runner stage
RUN npm install -g pnpm

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN pnpm install --prod

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]