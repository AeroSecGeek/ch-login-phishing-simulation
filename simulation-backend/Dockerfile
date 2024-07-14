FROM node:20-alpine

ENV PNPM_HOME "/pnpm"
ENV PATH "$PNPM_HOME:$PATH"
RUN corepack enable

# Set the working directory
WORKDIR /usr/src/app

# Copy the backend source code, excluding files in .dockerignore
COPY . .

RUN pnpm install

# Install TypeScript globally
RUN pnpm add -g typescript

# Compile TypeScript to JavaScript
RUN pnpm run build
COPY /public ./dist/public

ENV NODE_ENV production
EXPOSE 3000

# Start the application
CMD ["node", "dist/app.js"] 