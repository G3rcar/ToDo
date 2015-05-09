/**
 * Index of the app, shows only the pending tasks with an option to add a new one
 * @author gerardo.calderon
 */

var moment = require('alloy/moment');

/**
 * Used to show the form to add a new task
 * @param Event e
 */
function openTaskForm(e) {
    var addTaskWindow = Alloy.createController('addTask');
    addTaskWindow.getView().open();
}


/**
 * Used to show the window to see task and mark it as complete
 * @param Event e
 */
function showTask(e){
	var section = $.pendingList.sections[e.sectionIndex];
    var item = section.getItemAt(e.itemIndex);
    var args = {
    	idTask: item.properties.idTask
    };
	
	var viewTask = Alloy.createController('viewTask', args);
	viewTask.getView().open();
}

/**
 * Used to change the date of each model in the collection
 * @param Model model
 */
function listTransform(model){
	var newItem = model.toJSON();
	newItem.last_update = "Updated " + moment(newItem.last_update).calendar().toLowerCase();

	return newItem;
}

/**
 * Filtering the collection, just show the tasks marked as pending
 * @param Collection collection
 */
function pendingFilter(collection){
	return collection.where({ status:'p' });
}



Alloy.Collections.task.fetch({ query:'SELECT * FROM task ORDER BY last_update DESC' });
$.index.open();
