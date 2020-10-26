FROM node:lts-alpine3.9

#Create app directory
WORKDIR /usr/src/app

#Add git
RUN apk add --no-cache git

#Bundle app source
RUN git clone https://github.com/alexvarney/portfolio-v2.git .

#Build the client app
RUN yarn && yarn build

#Run the app
CMD ["serve", "-s", "public"]