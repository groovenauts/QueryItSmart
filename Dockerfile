FROM node

WORKDIR /usr/app
ADD . /usr/app
RUN npm install --global yarn@0.16.1; \
    yarn install; \
    npm run build

EXPOSE 8080

CMD ["npm", "start"]
