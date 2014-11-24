/**
 * 
 */
package org.zhubao.docx;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author jason.zhu
 * @date   2014-11-18
 * @email jasonzhu@augmentum.com.cn
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME) 
@Documented
public @interface ListSize {

	int size() default 1;
	
}
