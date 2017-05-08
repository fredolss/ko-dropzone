(function (root, factory) {
  if(typeof define === "function" && define.amd) {
        define("dropZone",["knockout"], factory);
  } else if(typeof module === "object" && module.exports) {
        module.exports = factory(require("knockout"));
  } else {
        factory(ko);
  }
}(this, function(ko) {

return ko.bindingHandlers.dropZone = {
    init: function (element, valueAccessor) {
        element.classList.add("ko-dropzone");

        function active(e) {
            element.classList.add("ko-dropzone-active");
            if (e.preventDefault) { e.preventDefault(); }
            return false;
        }

        function stop(e) {
            element.classList.remove("ko-dropzone-active");
        }

        function handleDrop(e) {
            e = e || window.event;  
            if (e.preventDefault) { e.preventDefault(); }

            var dt = e.dataTransfer;
            var files = dt.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                valueAccessor().handleDrop(file);
            }
            element.classList.remove("ko-dropzone-active");
            return false;
        }

        element.addEventListener('dragover', active);
        element.addEventListener('dragenter', active);
        element.addEventListener('dragleave', stop);
        element.addEventListener('drop', handleDrop);

         ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            element.removeEventListener('dragover', active);
            element.removeEventListener('dragenter', active);
            element.removeEventListener('dragleave', stop);
            element.removeEventListener('drop', handleDrop);
        });
    }
};

}));