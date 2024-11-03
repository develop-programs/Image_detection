FROM  node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npx prisma generate

COPY . .

CMD npm run dev