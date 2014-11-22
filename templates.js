<script id="User-Story" type="text/x-handlebars-template">
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
</script>

<script id="Display-Messages" type="text/x-handlebars-template">
	<div class="container">
	    <div class="page-header">
	     	<h1>{{Title}}</h1>
	    </div>
    	{{#each Messages}}
			<div class="alert" role="alert"> {{Message}} </div>
		{{/each}}
	</div>
</script>

<script id="Title-Chat" type="text/x-handlebars-template">
	<div class="col-sm-4">
  		<div class="list-group">
       		{{#each Titles}}
				<div class="alert" role="alert"> {{Title}} </div>
			{{/each}}
  		</div>
	</div>
</script>
