# Database Caching
Database caching is simply save the result(cache) of a request into memory
Instead of Redis, we can also use package called 
```
cache-manager
@types/cache-manager
``` 
also provides a tools from @nestjs/common package for caching a request. This only can use in get Request

# use cache manager