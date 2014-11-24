<html>
<head>
<title>Bball - Server API</title>
<style type="text/css">
body {
	font-family: Calibri, arial, sans-serif;
	font-size: 14px;
}
body {
    font-family: Calibri, arial, sans-serif;
    font-size: 14px;
}
table.api {
    border-collapse: collapse;
    border-top: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
}
table.api th,td {
    border-left: 1px solid #BBBBBB;
    border-bottom: 1px solid #BBBBBB;
    padding: 3px;
}
table.api th {
    
}
table.api td.api-info {
    font-weight: bold;
    background: none repeat scroll 0 0 #EEEEEE;
    color: #0000CC;
}
table.api td.ctp {
    text-align: right;
}
table.api a:visited {
    color: blue;
}
.api-group {
    border: 1px solid #BBBBBB; 
    padding-left: 8px; 
    margin-bottom: 10px; 
    overflow-x: auto;
}
.api-group-name {
    margin-bottom: 10px;
    font-weight: bold;
    font-style: italic;
    font-size: 24px;
}
</style>
</head>
<body>
<div class="api-group">
    <div class="api-group-name">Error Code List</div>
<table class="api">
        <tr>
			<td class="api-info">Code</td>
			<td class="api-info">Message</td>
		</tr>
    <#list errorCodes as errorCode>
		<tr>
		    <td class="ctp">${errorCode.code}</td>
            <td>
           		${errorCode.msg}
            </td>
        </tr>
	</#list>
	</table>
    <div style="clear: left;"></div>
    </div>
</body>
</html>