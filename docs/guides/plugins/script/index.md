---
title: Plugin Script
titleTemplate: Guides
description: Guide to writing and managing plugin script files for Mojuru.
---

# Plugin Script

The second file of a plugin is the **script file** (`plugin-script.js`).  
This file contains the logic to fetch, parse, and serve content from the plugin's source.

```javascript
async function search(query) {
  // code...
}

async function fetchEpisodes(id) {
  // code...
}

async function fetchSources(id) {
  // code...
}

return {
  search,
  fetchInfo,
  fetchEpisodes,
  fetchSources,
};
```

### Detailed Function Guides

- [Search](./search) – How to implement the `search` function and its return format.
- [Fetch Episodes](./fetch-episodes) – Guide for `fetchEpisodes` and expected results.
- [Fetch Sources](./fetch-sources) – Details on `fetchSources` and streaming data format.

> [!IMPORTANT]
> Make sure each function strictly follows the expected return format to ensure compatibility with Mojuru.
