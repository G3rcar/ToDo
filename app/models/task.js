exports.definition = {
	config: {
		columns: {
		    "id_task": "INTEGER PRIMARY KEY AUTOINCREMENT",
		    "content": "TEXT",
		    "status": "TEXT",
		    "image": "TEXT",
		    "last_update": "TEXT"
		},
		adapter: {
			type: "sql",
			collection_name: "task",
			idAttribute: "id_task"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};