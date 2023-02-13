## To run docker
1. Create docker image from docker file
```docker build -t *nameofimages .```

2. Run image and expose the port to outside
```docker run -p 3002:3002 *nameofimages```

## Basic configuration about dockerize nestjs application
This is how to setup docker in nest framework

```
# From => pull node image OR you can specify a version with pull a distro and install the requaire package
FROM node:carbon

# Workdir => specify working directory
WORKDIR /src

# Copy => copy application source from local machine to container
COPY . .

# Rum => run a command
RUN npm install

# Expose => expose container port to outside
EXPOSE 3000

# Cmd => running program
CMD [ "npm", "start" ]
```

## To run docker
```docker build -t *nameOfContainer .```