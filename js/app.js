(function() {

// Modelの定義
var Task = Backbone.Model.extend({
    defaults: { // デフォルト値を定義する
        title: 'do something!',
        completed: false
    },
    toggle: function() { // メソッドも定義できる
        this.set('completed', !this.get('completed'));
    },
    log: function() {
        console.log(this.toJSON());
    }
});

var task1 = new Task({
    //title: 'do it!', // デフォルト値が設定される
    completed: true
});

// // setter
// task1.set('title', 'newTitle');
// // getter
// var title = task1.get('title');
// console.log(title);

// // JSON形式で取得する
// console.log(task1.toJSON());

task1.log();
task1.toggle();
task1.log();

})();