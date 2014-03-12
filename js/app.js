(function() {

// Modelの定義
var Task = Backbone.Model.extend({
    defaults: { // デフォルト値を定義する
        title: 'do something!',
        completed: false
    },
    log: function() {
        console.log(this.toJSON());
    }
});
var task = new Task();

// Viewの定義
var TaskView = Backbone.View.extend({
    tagName: 'li' // HTMLのタグ
    , template: _.template($('#task-template').html())
    , render: function() {
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this; // renderでは常にthisを返す
    }
});

// Collectionの定義
var Tasks = Backbone.Collection.extend({
    model: Task
});
var tasks = new Tasks([
    // 各Taskのデータを設定
    {
        title: 'task1'
        , completed: true
    },
    {
        title: 'task2'
    },
    {
        title: 'task3'
    }
]);
console.log(tasks.toJSON());

})();