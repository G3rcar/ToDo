/**
 * Form used to add a new task
 * @author gerardo.calderon
 */

var moment = require('alloy/moment');
var args = arguments[0] || {};

var idTask = args.idTask;
var task;

/**
 * Used to show the form to add a new task
 * @param Event e
 */
function openTaskForm(e) {
    var editTaskWindow = Alloy.createController('editTask',{ 
    	idTask:idTask,
    	callback:initPanel
   	});
    editTaskWindow.getView().open();
}


function completeTask(e){
	task.set({ 
		status:'c',
		last_update:moment().format() 
	}).save();
	Alloy.Collections.task.fetch();
	$.viewTask.close();
}

function deleteTask(e){
	Alloy.Collections.task.remove(task);
	task.destroy();
	Alloy.Collections.task.fetch();
	$.viewTask.close();
}

/**
 * Return to back
 */
function onHomeClick(e){
	$.viewTask.close();
}


function initPanel(){
	var collection = Alloy.Collections.task;
	task = collection.get(idTask);
	
	var data = task.toJSON();
	
	$.txtContent.text = data.content;
	$.txtDate.text = "Updated " + moment(data.last_update).calendar().toLowerCase();
	
	if(data.status == "c"){
		$.taskButtonsContainer.remove($.btnComplete);
	}
}

initPanel();
$.viewTask.open();
