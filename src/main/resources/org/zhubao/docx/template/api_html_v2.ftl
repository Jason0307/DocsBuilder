<html>
<head>
<title>Bball - Server API</title>
<link href="../css/format.css" type="text/css" rel="stylesheet"></link>
<link href="../css/github-markdown.css" type="text/css" rel="stylesheet"></link>
<link href="../css/bundle-hub.css" type="text/css" rel="stylesheet"></link>
<link href="../css/main.css" type="text/css" rel="stylesheet"></link>
</head>
<body class="layout page-docs body-threes theme-solid header-solid header-bg-size-auto header-bg-pos-tl header-overlay-triangles lumosity-normal undefined  os-windows">
<div class="wrapper">
		<header id="header" class="header">
			<div class="container">
				<h1 class="navbar-brand">
					<a href="https://sample-threes.readme.io/v1.0">Flight</a>
				</h1>
				<div class="navbar-collapse collapse">
					
					<ul class="nav navbar-nav">
						<li class="active">
							<a href="#" title="Documentation">Documentation</a>
						</li>
						
					</ul>
					<ul class="nav navbar-nav pull-right">
						<li>
							<span class="not-link">v1.0</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div class="container body-container">
			<div class="main-content">
				<div class="main-head">
					<div id="sidebar">
						<div id="sticky0-sticky-wrapper" class="sticky-wrapper">
							<div sticky="0" class="sidebar-nav" id="sticky0" style="width: 200px;">
								<div class="sidebar-inside">
								<#list apiObjectGroup?keys as groupName>
									<#if apiObjectGroup[groupName]?size gt 0>
									<div class="sidebar-category">
										<h4>
											<a href="" data-sidebar="orders-1">
												<div class="fa fa-caret-right fa-right"></div>
												${groupName}
											</a>
										</h4>
										<ul>
											<#list apiObjectGroup[groupName] as apiObject>
											<li>
												<a href="#" data-sidebar="${apiObject.name}" class="sidebar-link">
													<span title="post" class="pg-type type-${apiObject.method?lower_case}">${apiObject.method}</span>
													<span>${apiObject.name}</span>
												</a>
											</li>
											</#list>
										</ul>
									</div>
									</#if>
								</#list>	
									<div class="sidebar-category">
										<h4>
											<a href="http://twitter.com/orderapi" data-sidebar="twitter-orderapi">
												<div class="fa fa-caret-right fa-right"></div>
												More
											</a>
										</h4>
										<ul>
											<li>
												<a href="http://twitter.com/orderapi" data-sidebar="twitter-orderapi" target="_self" class="sidebar-link">
													<span>GameCloudStudios</span>
													<div class="fa fa-external-link-square external"></div>
												</a>
											</li>
											
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section-right-parent">
						<div class="section-right-container">
						<#list apiObjectGroup?keys as groupName>
							<#if apiObjectGroup[groupName]?size gt 0>
								<#list apiObjectGroup[groupName] as apiObject>
							<div data-page="${apiObject.name}" class="docs-page">
								<div class="docs-content">
									<div class="docs-header">
										<h1>
											<span class="pg-type-big pg-type type-${apiObject.method?lower_case}">${apiObject.method}</span>
											${apiObject.name}
										</h1>
										<div marked="" class="ng-isolate-scope">
											<p>${apiObject.requestUrl}</p>
										</div>
										<hr/>
									</div>
									<div class="docs-body">
										<p><strong>Request Parameters:</strong></p>
											<#if apiObject.parameters?size==0>`None`</#if>
											<table>
												<thead>
													<tr>
														<th>Name</th>
														<th>Type</th>
														<th>Mock</th>
														<th>Reference</th>
													</tr>
												</thead>
												<tbody>
											<#list apiObject.parameters as parameter>
													<tr>
														<td>${parameter.name}</td>
														<td>${parameter.type}</td>
														<#if builderUtil.isVo(parameter.typeClass)><td class="mock"> ${parameter.mockData!}</td><#else><td>None</td></#if>
														<#if builderUtil.hasReference(parameter.reference)><td class="mock"> ${parameter.reference!}</td><#else><td>None</td></#if>
													</tr>
											</#list>
												</tbody>
											</table>
											
											<p><strong>Response:</strong></p>
												<pre>
										   			 <code>
													<#assign mData = formatUtil.formatJson(apiObject.mockData)>
														${mData}
													 </code>
												</pre>
													
											</div>
										</div>
									</div>
							</#list>
							</#if>
						</#list>
						</div>
					</div>
				</div>
			</div>
	</div>
</div>
<script src="../js/jquery.js" type="text/javascript"></script>
<script src="../js/urchin.js" type="text/javascript"></script>
<script src="../js/format.js" type="text/javascript"></script>
<script src="../js/tool.js" type="text/javascript"></script>
<script src="../js/init-template.js"type="text/javascript"></script>
</body>
</html>