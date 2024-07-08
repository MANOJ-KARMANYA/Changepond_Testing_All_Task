package Com.APITesting;

import org.json.simple.JSONObject;
import static org.hamcrest.Matchers.*;
import java.util.*;

import org.testng.Assert;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;
import io.restassured.response.Response;




public class PUTPatchandDeleteRequest {
	
	
	@Test
	
	public void PUTRequest() {
		JSONObject request = new JSONObject();
		
		
		
		//request.put("userId","Manojkumar@gmail.com");
		//request.put("userPass","manoj@123");
		
		
		request.put("userId","test@gmail.com");
		request.put("userPass","test@123");
		
		
		
		System.out.println(request.toJSONString());
		baseURI = "http://localhost:8888/";
		
		
		
		given().header("content-Type", "application/json").
	    contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).put("user").then().statusCode(200).log().all();
		

		
	}
	
	//@Test
	public void PATCHRequest() {
		JSONObject request = new JSONObject();
		request.put("userId","Manojkumar@gmail.com");
		request.put("userPass","manoj@123456");
		System.out.println(request.toJSONString());
		baseURI = "http://localhost:8888/";
		
		given().header("content-Type", "application/json").
	    contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).patch("user/fd0e").then().statusCode(200).log().all();
	}
	
	
	
	
	
	//@Test
	
public void DELETERequest() {
	
	baseURI = "http://localhost:8888/";
	
	when().delete("user/fac0").then().statusCode(204).log().all();
}

}
