FROM node:14.11-buster

# Set the locale
ENV LANG C.UTF-8
RUN apt-get update && apt-get install -y wget curl git build-essential libsndfile1

# RUN curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
# Clean up
# RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
# RUN apt install -y nodejs

RUN node --version
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i -g @adonisjs/cli

EXPOSE 3333

CMD [ "node" ]

