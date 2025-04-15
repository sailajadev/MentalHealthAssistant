# Base image with Node.js and Python installed
FROM node:18-bullseye

# Install Python manually (if needed) and tools
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Set working directory
WORKDIR /app

# Copy backend and frontend code
COPY backend backend/
COPY frontend frontend/
COPY requirements.txt ./

# Install backend Node.js dependencies
WORKDIR /app/backend
RUN npm install

# Install Python requirements
WORKDIR /app
RUN pip3 install -r requirements.txt

# Install frontend Node.js dependencies and build
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Move frontend build to backend (optional if server.js needs to serve static frontend)
RUN mkdir -p /app/backend/public
RUN cp -r dist/* /app/backend/public/

# Set workdir back to backend
WORKDIR /app/backend

# Expose the port Node.js server uses
EXPOSE 5000

# Start the Node.js backend
CMD ["node", "server.js"]
