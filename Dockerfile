#FROM - pecifies base image to build from 
#COPY - 2 parameters: source, destination
#EXPOSE - specify ports

FROM node:16-alpine

RUN mkdir -p /usr/app/

WORKDIR /usr/app

COPY ./ ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD  ["npm", "start"]