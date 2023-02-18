# Solve ✔️

# Problem
When implementing redis from nest js documentation, i got some error Have some problem when use redis as storage, the error message is about type that not synchronize with other package

Here are the scenario:
1. In my previous project i'm trying to use caching response with redis as cache storage but it return error like this 
```
"message": "Type 'typeof import(\"cache-test/node_modules/cache-manager-redis-store/dist/index\")' is not assignable to type '(string | CacheStoreFactory | CacheStore) & typeof import(\"/Users/kk/dev/nodejs/cache-test/node_modules/cache-manager-redis-store/dist/index\")'.\n  ...
```

# Solved
I solve this problem down grade  version of some package 

```
"dependencies": {
  "cache-manager": "^4.1.0",
  "cache-manager-redis-store": "^2.0.0"
}
```

```
"devDependencies": {
  "@types/cache-manager": "^4.0.1"
}
```
