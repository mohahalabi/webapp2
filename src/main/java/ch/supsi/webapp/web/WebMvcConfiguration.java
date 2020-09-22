package ch.supsi.webapp.web;

import org.springframework.boot.autoconfigure.web.servlet.error.ErrorViewResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

// This configuration redirect any 404 errors to the root web app url / where react app is running
// see: https://stackoverflow.com/questions/53393115/spring-boot-2-1-0-only-serve-index-html-if-resource-not-resolved-spa-react-rou

@Configuration
public class WebMvcConfiguration implements ErrorViewResolver {

    @Override
    public ModelAndView resolveErrorView(HttpServletRequest request, HttpStatus status, Map<String, Object> model) {
        if (status == HttpStatus.NOT_FOUND) {
            return new ModelAndView("forward:/");
        }
        return null;
    }

}