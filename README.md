# Next.js JSON middleware

Adds  `application/json` HTTP `Content-Type` header to an API response.

Install from command line:
```
npm install @nikkiselev/next-json-middleware@0.1.0
```
Example
```
import json from '@nikkiselev/next-json-middleware';

const handler = (req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({ name: 'John Doe' }));
}

export default json(handler);
```

However, you can **use `res.json()` helper instead.**

```
export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
}
```
