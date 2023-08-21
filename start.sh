#!/bin/sh
startWeb(){
    sleep "5s"
    npm run deploy --prefix $(pwd)/examples-web
    npm run dev --prefix $(pwd)/examples-web
}
startWeb & npm run start
