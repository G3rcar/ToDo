/**
 * Form used to edit a task
 * @author gerardo.calderon
 */

var moment = require('alloy/moment');
var args = arguments[0] || {};

var idTask = args.idTask;
var task;
var instantDateTime;


/**
 * function used to save a task, triggered by the save Button
 * @param Event e
 */
function saveTask(e){
	task.set({
		content:$.txtContent.value,
		last_update:instantDateTime.format()
	}).save();
	Alloy.Collections.task.fetch();
	args.callback();
	$.editTask.close();
}

/**
 * Function used to cancel. Closes the window and returns to the list
 * @param Event e
 */
function cancel(e){
	$.editTask.close();
}



/**
 * Function used to init the form. Shows the date/time in a label
 */
function initForm(){
	var collection = Alloy.Collections.task;
	task = collection.get(idTask);
	instantDateTime = moment();
	
	var data = task.toJSON();
	
	$.txtContent.setValue(data.content);
	$.txtCreationDate.text = instantDateTime.format("MMMM Do YYYY, h:mm a");
}

initForm();
$.editTask.open();
