<script id="problem" type="text/x-handlebars-template">
<div class="nav">
<ul class="nav nav-pills" role="tablist">
<li role="presentation" class="active"><a href="#">Home</a></li>
<li role="presentation"><a href="#">Chat</a></li>
<li role="presentation"><a href="#">Write Story</a></li>
</ul>
<p/>
</div>

	<div class="container">
		<div class="row">
			<div class="col-sm-4">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">{{Title}}</h3>
					</div>
					<div class="panel-body">
						{{TitleContent}}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="well">
			<p>
				{{Description}}
			</p>
		</div>
	</div>

	<div class="container">
	<div class=btn-group-horizontal>
	<button class="btn btn-sm btn-primary btn-block">Next</button>
	<button class="btn btn-sm btn-primary btn-block">i</button>
	<button class="btn btn-sm btn-primary btn-block">:)</button>
	</div>
	</div>
</script>

<script id="sign_up" type="text/x-handlebars-template">
<div class="container">

<form class="form-signin" role="form">
<h2 class="form-signin-heading">Please sign in</h2>
<label for="inputEmail" class="sr-only">Email address</label>
<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
<label for="inputPassword" class="sr-only">Password</label>
<input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
<div class="checkbox">
<label>
<input type="checkbox" value="remember-me"> Remember me
</label>
</div>
<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
<a href="signup.html"><button class="btn btn-lg btn-secondary btn-block">Sign up</button></a>
</form>

</div> <!-- /container -->
</script>
<script id="chat" type="text/x-handlebars-template">
	<div class="container">
	    <div class="page-header">
	     	<h1>{{title}}</h1>
	    </div>
    	{{#each messages}}
			<div class="alert" role="alert"> {{message}} </div>
		{{/each}}
	</div>
</script>

<script id="chat_list" type="text/x-handlebars-template">
	<div class="col-sm-4">
  		<div class="list-group">
       		{{#each titles}}
				<div class="alert" role="alert"> {{title}} </div>
			{{/each}}
  		</div>
	</div>
</script>
