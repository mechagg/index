FROM node:14-alpine AS builder

WORKDIR /app

COPY . .
RUN yarn install
RUN yarn build

FROM node:14-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY package.json yarn.lock ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start", "-H", "0.0.0.0"]