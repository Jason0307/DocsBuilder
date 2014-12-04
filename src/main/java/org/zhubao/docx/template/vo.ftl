<html>
<head>
<title>Bball - Value Object</title>
<link href="markdown/css/github-markdown.css" type="text/css" rel="stylesheet"> 
</head>
<body>
    <div class="sel-mav">
        <select onchange="javascript:location.href='#'+this.options[this.selectedIndex].value;">
            <#list valueObjects as valueObject>
            <option value="${valueObject.name}">${valueObject.name}</option>
            </#list>
        </select>
    </div>
    
    <#list valueObjects as valueObject>
    <h2 id="${valueObject.name}">(${valueObject_index+1}) ${valueObject.name}</h2>
    <table border="0">
        <thead>  
	        <tr align="center">
	            <th>Type</th>
	            <th>Name</th>
	        </tr>
        </thead>
        <tbody>
        <#list valueObject.properties as prop>
	        <tr>
	            <td><#if builderUtil.isVo(prop.typeClass)><a href="#${prop.type}">${prop.type}</a><#else>${prop.type}</#if><#if prop.genericType != "">&lt;<a href="#${prop.genericType}">${prop.genericType}</a>&gt;</#if></td>
	            <td>${prop.name}</td>
	        </tr>
        </#list>
        </tbody>
    </table>
    </#list>
</body>
</html>