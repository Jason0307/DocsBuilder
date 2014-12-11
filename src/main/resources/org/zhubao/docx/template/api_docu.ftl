<!DOCTYPE html>
<!-- saved from url=(0028)http://iodocs.docusign.com/# -->
<html lang="en">
	<!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>${config.name}</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<!-- Mobile Specific-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- CSS-->
	<!--!= css("http://wilbur.io.s3.amazonaws.com/all.css")-->
	<link rel="stylesheet" href="css/app.css">
	<link rel="stylesheet" href="css/endpoint.css">
	<link rel="stylesheet" href="css/prettify.css">
	<link rel="stylesheet" href="css/docusignClient.css"></head>
<body>
	<div id="myModal" tabindex="-1" role="dialog" aria-labelleby="input options" aria-hidden="true" class="modal hide fade">
		<div class="modal-header">
			<button type="button" data-dismiss="modal" aria-hidden="true" class="close">x</button>
			<h3 id="myModalLabel">Select Options</h3>
			<div class="modal-body">
				<p>One fine day</p>
			</div>
			<div class="modal-footer">
				<button data-dismiss="modal" aria-hidden="true" class="btn">Close</button>
				<button class="btn btn-success">Save Changes</button>
			</div>
		</div>
	</div>
	<div id="content" class="clearBoth">
		<div id="tab" class="tabbable clearBoth">
			<ul class="mainNav nav nav-tabs">
				<#assign count=0>
				<#list docuGroup?keys as groupName>
				<#if count == 0>
				<li class="active">
				<#else>
				<li>
				</#if>
				<a href="${config.protocol}://${config.baseURL}/#tabEndpoint${count}" data-toggle="tab">${groupName}</a>
				</li>
				<#assign count=count+1>
				</#list>
			</ul>
			<div class="tab-content">
			<#assign endpointCount=0>
			<#list docuGroup?keys as groupName>
				<#if endpointCount == 0>
				<div id="tabEndpoint${endpointCount}" class="tab-pane endpoint active">
				<#else>
				<div id="tabEndpoint${endpointCount}" class="tab-pane endpoint">
				</#if>
					<ul class="actions">
						<li class="list-methods">
							<a href="#">List Methods</a>
						</li>
						<li class="expand-methods">
							<a href="#">Expand Methods</a>
						</li>
					</ul>
					<ul class="methods">
						<#assign methodCount=0>
						<#list docuGroup[groupName] as apiObject>
						 <li id="tabEndpoint${endpointCount}Method${methodCount}" class="method ${apiObject.httpMethod}">
							<div class="title">
								<span class="http-method">${apiObject.httpMethod}</span>
								<span class="name">${apiObject.methodName}</span>
								<span class="uri">${apiObject.uri}</span>
							</div>
							<form method="${apiObject.httpMethod}" enctype="" action="${config.baseURL}${config.version}${apiObject.uri}" style="display: block;">
								<span class="description">${apiObject.synopsis!}</span>
								<table id="tabEndpoint${endpointCount}Method${methodCount}Table" class="table table-hover">
									<thead>
										<tr>
											<th class="Param">Parameter</th>
											<th class="Value">Value</th>
											<th class="Type">Type</th>
											<th class="Desc">Description</th>
										</tr>
									</thead>
									<tbody>
										
									</tbody>
								</table>
								<input type="submit" value="Try It!" class="btn"></form>
								<div id="tabEndpoint${endpointCount}Method${methodCount}ResultsCall" class="results">
							</div>
						</li>
							<#assign methodCount= methodCount + 1>
						</#list>
						</ul>
						<#assign endpointCount= endpointCount + 1>
						</div>
					</#list>
			</div>
		</div>
	</div>
	<script src="js/jquery-1.8.2.development.js"></script>
	<script src="js/jquery-ui-1.9.0.custom.js"></script>
	<script src="js/timepicker.js"></script>
	<script src="js/underscore.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/backbone.js"></script>
	<script src="js/handlebars.js"></script>
	<script src="js/jquery.form.js"></script>
	<script src="js/prettify.js"></script>
	<script src="js/templates.js"></script>
	<script src="js/trView.js"></script>
	<script src="js/trArray.js"></script>
	<script src="js/trArrayHeader.js"></script>
	<script src="js/trDocuments.js"></script>
	<script src="js/trDocumentsHeader.js"></script>
	<script src="js/trObject.js"></script>
	<script src="js/trResponseView.js"></script>
	<script src="js/trSet.js"></script>
	<script src="js/trSingleDocumentSimple.js"></script>
	<script src="js/app.js"></script>
	<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>
</body>
</html>