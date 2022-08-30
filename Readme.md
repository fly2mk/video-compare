About
----------------------------
This app helps us to compare two videos side by side. It will load 50% of source1 video on LHS and 50% of source2 video on RHS. So we can compare the quality of 2 video. Let say an example, if you would like to compare the your video which is converted/transcoded as h.264 and h.265 formats, you can compare the quality by using this app.

For Dockerized version
----------------------------
1. In Dockerfile please set the app path at 'WORKDIR'

2. docker build -t ots/split_view .

3. docker run -p 3000:3000 -d ots/split_view




For Non Dockerized Version
----------------------------
1. Please install Node JS
2. brew install npm
3. sudo npm install
4. sudo npm install -g nodemon
5. nodemon

Your app will be listening on 3000. Port no. can be changed at /bin/www line no 15

Goto http://localhost:3000/ on your browser.
