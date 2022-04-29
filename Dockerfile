#FROM - pecifies base image to build from 
#COPY - 2 parameters: source, destination
#EXPOSE - specify ports

FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy from to
COPY ./ ./

#install dependencies
RUN npm install
RUN npm run build

EXPOSE 3000

#entry point instruction
CMD  ["npm", "start"]