# redis-toolkits-js


A simple and lightweight Redis utility toolkit for Node.js — provides built-in helpers for caching and pub/sub patterns using the official `redis` client.

---

## 📦 Installation

```bash
npm install redis-toolkits-js

```

Ensure Redis is running locally or provide a connection URL via the environment:

```env
REDIS_URL=redis://localhost:6379
```

---

## 🚀 Quick Start

```js
import {
  getOrSetCache,
  clearCache,
  publish,
  subscribe,
  redisClient
} from 'redis-toolkits-js
';

// Cache example
const data = await getOrSetCache('my-key', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}, 300);

// Pub/Sub example
publish('notifications', { type: 'user_signup', userId: 1 });

subscribe('notifications', (msg) => {
  console.log('Received:', msg);
});
```

---

## 🧩 API Reference

### 🔹 getOrSetCache(key, callbackFn, expireInSeconds = 3600)
- Returns cached value if available.
- If not, executes `callbackFn`, caches the result, and returns it.

```js
const value = await getOrSetCache('users', async () => fetchUsers(), 300);
```

---

### 🔹 clearCache(key)
- Deletes a specific key from Redis cache.

```js
await clearCache('users');
```

---

### 🔹 publish(channel, message)
- Publishes a JSON-serializable message to a Redis channel.

```js
await publish('log-channel', { level: 'info', message: 'User signed in' });
```

---

### 🔹 subscribe(channel, callback)
- Subscribes to a Redis channel and executes the callback for every message.

```js
await subscribe('log-channel', (msg) => {
  console.log('New log message:', msg);
});
```

---

## ⚙️ Configuration

You can configure the Redis client using the `REDIS_URL` environment variable or modify the connection settings in `src/connection.js`.

Default:
```env
REDIS_URL=redis://localhost:6379
```

---

## 📁 Project Structure

```
redis-toolkits-js
/
├── src/
│   ├── cache.js       # Caching utilities
│   ├── pubsub.js      # Pub/Sub handlers
│   ├── connection.js  # Redis client connection
│   └── index.js       # Main exports
├── README.md
├── package.json
```

---

## 🛠 Requirements

- Node.js v16+
- Redis server (local or remote)
- `redis` npm package (`v4+`)

---

## 🧪 Coming Soon

- Retry strategies
- Namespaced cache support
- TTL-aware cache invalidation
- Unit tests & TypeScript typings

---

## 📝 License

MIT © 2025  
Created and maintained by **Nurul Islam Rimon**
