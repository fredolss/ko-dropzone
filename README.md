# ko-dropzone

Drag and drop files custom binding handler for knockout js.

## Install

```
npm install ko-dropzone --save
```

## Usage

ko-dropzone can be used with amd, commonjs or without any module loader.

It will add itself to ko.bindingHandlers.dropZone.


```html
<div id="dropzone" data-bind="dropZone:{handleDrop:handleDrop}">Drop files here</div>
```

### Node/Browserfiy

```js
var ko = require("knockout");
var dz = require("ko-dropzone");

function AppViewModel() {

    this.handleDrop = function (file){
        alert("You dropped a file named " + file.name);
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
```

See <a href="example/index.html">Example</a> for more information.

### Styling
You can style the widget with these classes:

```css
.ko-dropzone {
     border:5px solid blue;
}

.ko-dropzone-active {
       border:5px solid red;
}
```