/**
 * 
 */
package org.zhubao.annotation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;


/**
 * @author jason.zhu
 * @date 2014-12-2
 * @email jasonzhu@augmentum.com.cn
 */
@Target({ ElementType.FIELD, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface IntegerSequence {

	IntegerType[] value() default { IntegerType.Name, IntegerType.Email,
			IntegerType.Password, IntegerType.Age, IntegerType.Gender };
}
