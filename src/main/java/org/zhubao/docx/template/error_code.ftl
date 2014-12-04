<html>
<head>
<title>Bball - Server API</title>
<link href="markdown/css/github-markdown.css" type="text/css" rel="stylesheet"> 
</head>
<body>
<div>
   <h4>Error Code List</h4>
<table>
	<thead>
        <tr>
			<th>Code</td>
			<th>Message</td>
		</tr>
		</thead>
	<tbody>
    <#list errorCodes as errorCode>
		<tr>
		    <td>${errorCode.code}</td>
            <td>
           		${errorCode.msg}
            </td>
        </tr>
	</#list>
	</tbody>
	</table>
    </div>
</body>
</html>