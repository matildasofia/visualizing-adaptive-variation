
# Display text in HiGlass

![Text](https://aveit.s3.amazonaws.com/higlass/static/higlass-text-screenshot.png)


**Note**: This is the source code for the text track only! You might want to check out the following repositories as well:

- HiGlass viewer: https://github.com/higlass/higlass
- HiGlass server: https://github.com/higlass/higlass-server
- HiGlass docker: https://github.com/higlass/higlass-docker

## Installation
 
```
npm install higlass-text
```

## Usage

The live script can be found at:

- https://unpkg.com/higlass-text/dist/higlass-text.js

### Client

1. Load this track before the HiGlass core script. For example:

```
<script src="/higlass-text.js"></script>
<script src="hglib.js"></script>

<script>
  ...
</script>
```

### Options

The following options are available:
```
 {
  "uid": "texttrack",
  "type": "text",
  "options": {
    "backgroundColor": "#ededed",
    "textColor": "#333333",
    "fontSize": 14,
    "fontFamily": "Arial",
    "fontWeight": "normal",
    "offsetY": 0, // offset from the top of the track
    "align": "left", // left, middle, right
    "text": "Text to display",
  },
  "width": 568,
  "height": 25
},
```

### ECMAScript Modules (ESM)

We also build out ES modules for usage by applications who may need to import or use `higlass-text` as a component.

Whenever there is a statement such as the following, assuming `higlass-text` is in your node_modules folder:
```javascript
import { TextTrack } from 'higlass-text';
```

Then TextTrack would automatically be imported from the `./es` directory (set via package.json's `"module"` value). 

## Support

For questions, please either open an issue or ask on the HiGlass Slack channel at http://bit.ly/higlass-slack

## Development

### Testing

To run the test suite:

```
npm run test-watch
```

### Installation

```bash
$ git clone https://github.com/higlass/higlass-text.git
$ cd higlass-text
$ npm install
```
If you have a local copy of higlass, you can then run this command in the higlass-text directory:

```bash
npm link higlass
```

### Commands

 - **Developmental server**: `npm start`
 - **Production build**: `npm run build`

