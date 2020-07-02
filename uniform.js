var Uniform = {
    Boot:function(){
        var b=0;
        $( "*[data-uniform=true]" ).each(function() {
            b = $(this).height()>b ? $(this).height() : b;
        });
        $( "*[data-uniform=true]" ).height(b);
    }
};Uniform.Boot();
