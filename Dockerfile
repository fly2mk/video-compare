FROM node:8

# Create app directory
WORKDIR /Applications/XAMPP/htdocs/player/c4

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install

# Bundle app source
COPY . .

RUN apt-get update && apt-get install -y mediainfo scrot imagemagick

RUN npm install -g nodemon

EXPOSE 3000
CMD [ "nodemon"]
