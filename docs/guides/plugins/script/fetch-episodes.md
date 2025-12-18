---
title: fetchEpisodes
titleTemplate: Plugin Functions
description: Returns the list of episodes for a given content ID.
---

# fetchEpisodes(id)

Fetches all episodes for the given content ID.

### Return Format

```json
[
  {
    "id": "string",
    "number": "number"
  }
]
```

### Notes

- Both `id` and `number` are **mandatory** for each episode
- Additional optional fields may be added in future plugin versions.
