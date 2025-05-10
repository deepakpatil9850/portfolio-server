# server setup for portfolio

### use following command to setup server

npm init
git init

npm i express
npm i -D typescript @tsconfig/node22
npx tsc --init      =>  modify tsconfig.json => extends:"tsconfig/node22/tsconfig.json"
npm i -D tsx   => typescript runner for dev mode => npx tsx  --watch src/index.ts

add "type-check": "tsc --noEmit"  =>  compile typescript without outputs

add  "--env-file .env.dev" in  script run dev command
add  "--env-file .env.production" in  script run dev command