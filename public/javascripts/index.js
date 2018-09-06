fakejson={};
fakejson.database = [];
fakejson.loadAssets = function(){
    $.getJSON('https://jsonplaceholder.typicode.com/todos', function(data){
        fakejson.database = data;
        fakejson.init();
        // console.log(data);
    });
};

fakejson.init = function(){
    fakejson.generateMarkup();

}

fakejson.generateMarkup = function(){
    var template = '' ;

    $.each(fakejson.database, function(index){
        var db = fakejson.database;
        var id = db[index];



        template += '<div class="item">' ;

        template += '<div class="cl">' ;

        template += '<h5>"' + id.id +'"</h5>'

        template += '</div>';

        template += '<div class="p">' ;

        template += '<h5>"' +id.title+'"</h5>'

        template += '</div>';

        template += '<div class="q">' ;

        template += '<h5>"' + id.completed +'"</h5>'

        template += '</div>';

        template += '</div>';


    });
    $(".content").append(template);


}
fakejson.loadAssets();