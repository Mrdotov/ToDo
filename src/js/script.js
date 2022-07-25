window.onload = function() {

    var todoList = [];

    document.getElementById('add').onclick = function() {

        var d = document.getElementById('in').value;
        // {todo : Добавить хлеб , check : false   }
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        console.log(todoList);
        out();
        localStorage.setItem('todo', JSON.stringify(todoList))
    }

    function out() {
        var out = '';
        for (var key in todoList) {
            out += todoList[key].todo + '<br>';
            if (todoList[key].check == true) {
                out += '<input type="checkbox" checked>';
            } else {
                out += '<input type="checkbox" >';
            }

        }
        document.getElementById('out').innerHTML = out;
    }
}