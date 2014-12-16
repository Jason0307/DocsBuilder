<#assign count=0>
<#list apiObjectGroup?keys as groupName>
<#if apiObjectGroup[groupName]?size gt 0>
## ${groupName}
<ul>
<#list apiObjectGroup[groupName] as apiObject>
    <li> <a href="#${apiObject.name}"><strong>${apiObject.name}</strong></a></li>
</#list>
</ul>
<#list apiObjectGroup[groupName] as apiObject>
<#assign count=count+1>
<h4 id="${apiObject.name}">(${count}) ${apiObject.name}</h4>
**URL:**
`${apiObject.requestUrl}`

**RequsetMethod:**
`${apiObject.method}`

**Request Parameters:**
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

**Response:**

```
<#assign mData = formatUtil.formatJson(apiObject.mockData)>
${mData}
```
</#list>
</#if>
</#list>