# Solve ✔️


# Problem
Have some problem before, in sending cookie from backend to frontend
Here are the scenario:
1, In my previous project i'm trying to send cookie from be to fe, but somehow the cookie is not stored to web browser (fe).


# Solved
I solve this problem with update the cors configuration on backend and credentials option on frontend (using axios)

here how i solved this:
1. install dependencies for cookie parser
  ```npm i cookie-parser & npm i -D @types/cookie-parser```
2. register it as middleware
3. register ```CORS``` as middleware with this configuration:
  This will let you pass throgh the cookie to fe
  ```
  app.enableCors({
    origin: true,
    methods: 'GET, PUT, POST, DELETE',
    credentials: true
  });
  ```
4. check your cookie configuration, the option ```secure: true``` make you cannot receive any cookie from http request
5. in your frontend, set ```withCredentials: true```, with axios
  ```
  axios.get('http://localhost:3000/testing-cookie', { withCredentials: true }, (result) => {
    messages.value = result;
    console.log(result);
  })
  ```
