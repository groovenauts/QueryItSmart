FROM node:8.0

WORKDIR /usr/app
ADD .babelrc /usr/app/.babelrc
ADD package.json /usr/app/package.json
ADD package-lock.json /usr/app/package-lock.json
RUN npm install
ADD . /usr/app
RUN npm run build

EXPOSE 8080
VOLUME /usr/app/config

CMD ["npm", "start"]
