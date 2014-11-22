var url = 'http://talktome-spunout.herokuapp.com'

function signup(email,password,confirm_password,success,fail) {
	$.ajax({
		method: "POST",
		data: {
			email: email,
			password: password,
			password_confirmation: confirm_password
		},
		url:url+"/user.json",
		success: success(
			{
				username:email,
				password:password
			}
		),
		dataType: "json",
		error: function(xhr, status, error) {
			// var err = eval("(" + xhr.responseText + ")");
			// fail(err.Message);
		}
	});
};

function get_problems(user,success,fail) {
	$.ajax({
		method: "GET",
		url:url+"/problem.json",
		username:user.username,
		password:user.password,
		success: success,
		dataType: "json",
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			fail(err.Message);
		}
	});
};


function post_problem(user,title,description,success,fail) {
	$.ajax({
		method: "POST",
		data: {
			title: title,
			description: description
		},
		url:url+"/problem.json",
		username:user.username,
		password:user.password,
		success: success,
		dataType: "json",
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			fail(err.Message);
		}
	});
};


function get_chats(user, success, fail) {
	$.ajax({
		method: "GET",
		data: null,
		url: url+"/decision.json",
		username:user.username,
		password:user.password,
		success:success,
		dataType: "json",
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			fail(err.Message);
		}
	})
};

function get_chat(id,user,success,fail) {
	$.ajax({
		method: "GET",
		data: null,
		url: url+"/decision/"+id+".json",
		username:user.username,
		password:user.password,
		success:success,
		dataType: "json",
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			fail(err.Message);
		}
	})
};

function make_decision(problem,outcome,user,success,fail) {
	$.ajax({
		method: "POST",
		data: {
			problem_id: problem.id,
			outcome: outcome
		},
		url:url+"/problem.json",
		username:user.username,
		password:user.password,
		success: success,
		dataType: "json",
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			fail(err.Message);
		}
	});
};

function send_message(message,chat,user,success,fail) {
	$.ajax({
		method: "POST",
		data: {
			decision_id: chat.id,
			outcome: outcome
		},
		url:url+"/conversation_message.json",
		username:user.username,
		password:user.password,
		success: success,
		dataType: "json",
		error: function(xhr, status, error) {
			var err = eval("(" + xhr.responseText + ")");
			fail(err.Message);
		}
	});
}
