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
});
var taskView = new TaskView({model: task});
console.log(taskView.el); // .el : Viewを要素の形で取得する
//console.log(taskView.$el); // .$el : jQueryのオブジェクトとなる

})();