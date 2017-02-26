FROM node

WORKDIR /usr/app
RUN npm install --global yarn@0.16.1
ADD . /usr/app
RUN yarn install; \
    npm run build

EXPOSE 8080
VOLUME /usr/app/config

CMD ["npm", "start"]
