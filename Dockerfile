FROM node:latest

#Create app directory
WORKDIR /usr/src/app

#Bundle app source
RUN git clone https://github.com/alexvarney/portfolio-v2.git .

#Build the client app
RUN yarn && yarn build

#Run the app
CMD ["serve", "-s", "public"]