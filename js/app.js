(function() {

var Task = Backbone.Model.extend({

});
var Tasks = Backbone.Collection.extend({ model: Task });

var TaskView = Backbone.View.extend({

});
var TasksView = Backbone.View.extend({

});

var tasks = new Tasks([
    { title: 'task1', completed: true },
    { title: 'task2' },
    { title: 'task3' }
]);

})();