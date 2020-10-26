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
WORKDIR /usr/src/app

#Bundle app source
RUN git clone https://github.com/alexvarney/portfolio-v2.git .

#Build the client app
RUN yarn && yarn build

#Run the app
CMD ["serve", "-s", "./public"]