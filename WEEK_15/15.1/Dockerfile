FROM node:20
#put everything in app set working directory as app
WORKDIR /app  

COPY package*.json ./
RUN npm install

#copy source / everything in /app
COPY . .

#
RUN npx prisma generate
RUN npm run build

# port om which it will run expose the port
EXPOSE 3000

#to start the application (starting container)
CMD ["node", "dist/index.js"]