---
title: search
titleTemplate: Plugin Functions
description: Returns search results from a plugin.
---

# search(query)

Fetches content matching the given query string from the plugin.

### Return Format

```json
{
  "id": "string",
  "title": "string",
  "image": "string", // optional
  "url": "string" // optional
}
```

### Notes

- `id` and `title` are **mandatory**
- Additional optional fields may be added in future plugin versions.
