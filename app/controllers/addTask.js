/**
 * Form used to add a new task
 * @author gerardo.calderon
 */

var moment = require('alloy/moment');
var args = arguments[0] || {};

var task = Alloy.Collections.task;
var instantDateTime;


/**
 * function used to save a task, triggered by the save Button
 * @param Event e
 */
function saveTask(e){
	var cont = $.txtContent.value;
	var date = instantDateTime.format();
	var thisTask = Alloy.createModel('task', {
        content: cont,
        status: "p",
        last_update: date
    });
    task.add(thisTask);
    thisTask.save();
    task.fetch();
    $.addTask.close();
}

/**
 * Function used to cancel. Closes the window and returns to the list
 * @param Event e
 */
function cancel(e){
	$.addTask.close();
}


/**
 * Function used to init the form. Shows the date/time in a label
 */
function initForm(){
	instantDateTime = moment();
	$.txtCreationDate.text = instantDateTime.format("MMMM Do YYYY, h:mm a");
}


initForm();
$.addTask.open();
