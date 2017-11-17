FROM node:8-alpine

ADD index.js index.js

ENTRYPOINT [ "node", "index.js" ]
