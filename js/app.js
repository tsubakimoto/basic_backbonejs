(function() {

var Task = Backbone.Model.extend({
    defaults: {
        title: 'do something',
        completed: false
    },
    validate: function(attrs) {
        if (_.isEmpty(attrs.title)) {
            // titleが空白ならエラー
            return 'title must not be empty';
        }
    },
    initialize: function() {
        // invalid : バリデーション失敗時イベント
        this.on('invalid', function(model, error) {
            $('#error').html(error);
        });
    },
    log: function() {
        console.log(this.toJSON());
    }
});
var Tasks = Backbone.Collection.extend({ model: Task });

var TaskView = Backbone.View.extend({
    tagName: 'li',
    initialize: function() { // 初期化時処理
        // object.on(events, callback, [context])
        this.model.on('destroy', this.remove, this);
        this.model.on('change', this.render, this);
    },
    template: _.template($('#task-template').html()),
    render: function() {
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    },
    events: {
        'click .delete': 'destroy', // 削除イベント
        'click .toggle': 'toggle'
    },
    toggle: function() {
        this.model.set('completed', !this.model.get('completed'));
    },
    destroy: function() {
        if (confirm('are you sure?')) {
            this.model.log();
            this.model.destroy();
            this.model.log();
        }
    },
    remove: function() {
        this.$el.remove();
    }
});
var TasksView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function() {
        this.collection.on('add', this.addNew, this);
    },
    addNew: function(task) {
        var taskView = new TaskView({ model: task });
        this.$el.append(taskView.render().el);
    },
    updateCount: function() {
        var uncompletedTasks = this.collection.filter(function(task) {
            return !task.get('completed');
        });
        $('#count').html(uncompletedTasks.length);
    },
    render: function() {
        this.collection.each(function(task) {
            var taskView = new TaskView({ model: task });
            this.$el.append(taskView.render().el);
        }, this);
        this.updateCount();
        return this;
    }
});

var AddTaskView = Backbone.View.extend({
    el: '#addTask',
    events: {
        'submit': 'submit'
    },
    submit: function(e) {
        e.preventDefault(); // formのsubmitイベントを中止
        // var task = new Task({ title: $('#title').val() });
        var task = new Task();
        if (task.set({ title: $('#title').val() }, { validate: true })) {
            // バリデーションが問題なければコレクションに追加
            this.collection.add(task);
        }
    }
});

var tasks = new Tasks([
    { title: 'task1', completed: true },
    { title: 'task2' },
    { title: 'task3' }
]);

var tasksView = new TasksView({ collection: tasks });
var addTaskView = new AddTaskView({ collection: tasks });
$('#tasks').html(tasksView.render().el);

})();