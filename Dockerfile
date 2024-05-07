FROM node:16
WORKDIR /app
COPY package.json /app
RUN ls -la /app  # This will list the contents of /app directory
RUN rm -rf /root/.npm /root/.node-gyp
RUN rm -rf node_modules
RUN npm install --force
COPY . /app
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]