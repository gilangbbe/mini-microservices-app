FROM node:alphine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ['npm', 'start']