var args = arguments[0] || {};

var idTask = args.idTask;
var task;


function completeTask(e){
	task.set({ status:'c' }).save();
	Alloy.Collections.task.fetch();
	$.viewTask.close();
}

function deleteTask(e){
	Alloy.Collections.task.remove(task);
	task.destroy();
	Alloy.Collections.task.fetch();
	$.viewTask.close();
}


function initPanel(){
	var collection = Alloy.Collections.task;
	task = collection.get(idTask);
	
	var data = task.toJSON();
	
	$.txtContent.text = data.content;
	$.txtDate.text = data.date;
}

initPanel();
$.viewTask.open();
