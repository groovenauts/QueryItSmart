FROM node:6.9

WORKDIR /usr/app
RUN npm install --global yarn@0.16.1
ADD yarn.lock /usr/app/yarn.lock
ADD .babelrc /usr/app/.babelrc
ADD package.json /usr/app/package.json
RUN yarn install
ADD . /usr/app
RUN npm run build

EXPOSE 8080
VOLUME /usr/app/config

CMD ["npm", "start"]
