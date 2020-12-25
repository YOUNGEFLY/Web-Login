package Service;

import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;

public interface RequestToJson {
    public JSONObject RequestToJson(HttpServletRequest request);
}
