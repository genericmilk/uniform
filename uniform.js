let uniform = {
    boot: function() {
        var b = 0;
        var elements = document.querySelectorAll('*[data-uniform=true]');
        elements.forEach(function(element) {
            b = element.offsetHeight > b ? element.offsetHeight : b;
        });
        elements.forEach(function(element) {
            element.style.height = b + 'px';
        });
    }
};
uniform.boot();
