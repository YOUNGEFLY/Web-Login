package Service.Impl;

import Service.RequestToJson;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;


public class RequestToJsonImpl implements RequestToJson {
    @Override
    public JSONObject RequestToJson(HttpServletRequest request){

        try {
            int contentLength = request.getContentLength();
            if(contentLength<0){
                return null;
            }
            byte buffer[] = new byte[contentLength];
            for (int i = 0; i < contentLength;)
            {
                int readlen = request.getInputStream().read(buffer, i,
                        contentLength - i);
                if (readlen == -1) {
                    break;
                }
                i += readlen;
            }
            String charEncoding = request.getCharacterEncoding();
            if (charEncoding == null) {
                charEncoding = "UTF-8";
            }
            String data =new String(buffer, charEncoding);
            System.out.println(data);
            JSONObject jsonObject = new JSONObject(data);
            return  jsonObject;
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
