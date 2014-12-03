package org.zhubao.docx;

public class BuilderUtil {

	public boolean isVo(Class<?> clazz) {
		if (clazz == null) {
			return false;
		}
		if (clazz.isPrimitive()) {
			return false;
		}
		String className = clazz.getName();
		if (className.startsWith("java.")) {
			return false;
		}
		if (className.startsWith("javax.")) {
			return false;
		}
		if (className.startsWith("sun.")) {
			return false;
		}
		if (className.startsWith("org.")) {
			return false;
		}
		return true;
	}
	
	public boolean hasReference(String value){
		if(null != value && !"".equals(value)){
			return true;
		}else{
			return false;
		}
	}

}
