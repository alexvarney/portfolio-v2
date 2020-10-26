FROM node:10-alpine3.10                                                         
                                                                                                  
RUN apk --no-cache add shadow \                                                                   
    git \                                                                                         
    gcc \                                                                                         
    musl-dev \                                                                                    
    autoconf \                                                                                    
    automake \                                                                                    
    make \                                                                                        
    libtool \                                                                                     
    nasm \                                                                                        
    tiff \                                                                                        
    jpeg \                                                                                        
    zlib \                                                                                        
    zlib-dev \                                                                                    
    file \                                                                                        
    pkgconf \                                                                                     
    && yarn install

#Create app directory
WORKDIR /usr/src/

#Bundle app source
ADD https://api.github.com/repos/alexvarney/portfolio-v2/git/refs/heads/main version.json
RUN git clone -b main https://github.com/alexvarney/portfolio-v2.git ./app

WORKDIR /usr/src/app

#Build the client app
RUN yarn && yarn build

#Run the app
CMD ["npx", "serve", "-s", "./public"]