function doClick(o){
	 o.className="nav_current";
	 var j;
	 var id;
	 var e;
	 for(var i=1;i<=10;i++){ //i<10 ���ٸ���Ŀ������ֵ
	   id ="nav"+i;
	   j = document.getElementById(id);
	   e = document.getElementById("sub"+i);
	   if(id != o.id){
	   	 j.className="nav_link";
	   	 e.style.display = "none";
	   }else{
			e.style.display = "block";
	   }
	 }
	 }// * www.divcss5.com */