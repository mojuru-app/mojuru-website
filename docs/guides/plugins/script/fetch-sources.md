---
title: fetchSources
titleTemplate: Plugin Functions
description: Returns streaming sources for a given episode.
---

# fetchSources(id)

Fetches all available streaming sources for a given episode.

### Return Format

```json
[
  {
    "label": "string",
    "type": "'hls' | 'dash' | 'mp4'", // optional
    "qualities": [
      {
        "quality": "'1080p' | '720p' | '480p' | '360p' | 'default' | string",
        "url": "string",
        "headers": { // optional
          "header-1": "xyz",
          "header-2": "xyz",
          // ...
        },
        "metadata": {
          "language": "string", // optional
          "runtime": 3600, // optional
          "size": 104857600 // optional
        }
      }
    ],
    "subtitles": [ // optional
      {
        "url": "string",
        "label": "string",
        "language": "string", // optional
        "format": "string" // optional
      }
    ]
  }
]
```
