---
title: Plugin Metadata
titleTemplate: Guides
description: Guide to creating and configuring plugin metadata in Mojuru.
---

# Plugin Metadata

The first file is the **plugin metadata** (`plugin-name.json`), which describes the plugin and its properties. Here is an example:

```json
{
  "name": "ExamplePlugin",
  "compatible": true, // !
  "pluginType": "provider", // !
  "pluginProvider": "Standard", // !
  "contentProvider": "ExampleSource",
  "scriptUrl": "https://example.com/example-plugin/plugin-script.js",
  "iconUrl": "https://example.com/example-plugin/plugin-icon.png", // optional
  "author": { // optional
    "name": "John Doe",
    "icon": "https://example.com/example-plugin/plugin-avatar.png"
  },
  "version": "1.0.0", // optional
  "language": "English", // optional
  "streamType": "HLS", // optional
  "quality": "1080p", // optional
  "baseUrl": "https://example.com", // optional
  "type": "anime" // optional
}
```

## Metadata Fields

Each field in the metadata JSON has a specific purpose:

> [!IMPORTANT]
> Fields marked with <Badge type="danger" text="!" /> **must be set** with the values specified in the metadata above.

### name <Badge text="string" type="info" />  
  The name of the plugin.

### compatible <Badge type="danger" text="!" /> <Badge text="'true''" type="info" />

### pluginType <Badge type="danger" text="!" /> <Badge text="'provider'" type="info" />

### pluginProvider <Badge type="danger" text="!" /> <Badge text="Standard" type="info" />

### contentProvider <Badge text="string" type="info" />  
  Where the content comes from.

### scriptUrl <Badge text="string" type="info" />  
  URL pointing to the main JavaScript file of the plugin.

### iconUrl <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />
  URL for the plugin icon.

### author <Badge text="Optional" type="tip" /> <Badge text="object" type="info" />  
  Information about the plugin author:

- ### name <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />
  Author’s name.  

- ### icon <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />
  Author’s avatar URL.

### version <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />  
  Plugin version.

### language <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />  
  Language of the content.

### streamType <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />  
  Stream type, e.g., `"HLS"` or `"MP4"`.

### quality <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />  
  Maximum video quality available, e.g., `"1080p"`.

### baseUrl <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />  
  Base URL of the plugin content.

### type <Badge text="Optional" type="tip" /> <Badge text="string" type="info" />  
  Type of content.