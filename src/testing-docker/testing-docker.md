## To run docker
1. Create docker image from docker file
```docker build -t *nameofimages .```

2. Run image and expose the port to outside
```docker run -p 3002:3002 *nameofimages```

## More container
1. Built images from docker file (debian, node, and npm)
```docker-compose build```
2. docker compose up => use existing image that built
```docker-compose up```