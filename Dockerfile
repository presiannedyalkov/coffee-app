FROM node:latest

# Install git
RUN apt-get update && apt-get install -y git

# Clone the GitHub repository
RUN git clone https://github.com/presiannedyalkov/coffee-app.git /app

# Change the working directory
WORKDIR /app

COPY /.variables.env /app/

# Setup backend
RUN npm install 
RUN npm run setup

# Setup frontend
RUN cd frontend && npm install

# Start server
RUN npm start

# Start react app
RUN cd frontend && npm start