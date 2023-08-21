FROM --platform=linux/amd64 node:18
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run setup
RUN npm ci examples-web --prefix /app/examples-web 
RUN npm run setup --prefix /app/examples-web
# RUN npm run deploy --prefix /app/examples-web 
RUN chmod +x /app/start.sh
# ENTRYPOINT [ "/app/start.sh" ]