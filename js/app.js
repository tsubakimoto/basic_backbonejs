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
    , events: { // イベントを定義
        'click .command': 'sayHello' // 'トリガ (セレクタ)': 'メソッド名'
    }
    , sayHello: function() { // イベント関数
        alert('hello!');
    }
});
var taskView = new TaskView({model: task});
console.log(taskView.render().el);
$('body').append(taskView.render().el);

})();