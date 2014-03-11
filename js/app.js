(function() {

// Modelの定義
var Task = Backbone.Model.extend({
    defaults: { // デフォルト値を定義する
        title: 'do something!',
        completed: false
    }
});

var task1 = new Task({
    //title: 'do it!', // デフォルト値が設定される
    completed: true
});

// JSON形式で取得する
console.log(task1.toJSON());

})();