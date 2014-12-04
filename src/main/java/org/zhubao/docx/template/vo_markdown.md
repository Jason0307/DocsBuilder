##Vo List
<#list valueObjects as valueObject>
####(${valueObject_index+1}) ${valueObject.name}
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
<#list valueObject.properties as prop>
	     <tr>
			<td>${prop.type}</td>
			<td>$${prop.name}</td>
		 </tr>
<#/list>
	</tbody>
</table>
<#/list>