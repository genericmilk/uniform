var Uniform = {
    Boot:function(){
        var b=0;
        $( "*[data-uniform=true]" ).each(function() {
            if($(this).height()>b){
                b = $(this).height();
            }
        });
        $( "*[data-uniform=true]" ).height(b);
    }
};
$(function() {
    Uniform.Boot();
});
