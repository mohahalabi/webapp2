package ch.supsi.webapp.web.controllers;

import ch.supsi.webapp.web.model.Ingredient;
import ch.supsi.webapp.web.model.Pizza;
import ch.supsi.webapp.web.model.Size;
import ch.supsi.webapp.web.services.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class AppRestController {

    @Autowired
    private PizzaService pizzaService;

    // Price is done on the front end after fetching sizes and ingredients
    // but we can use this endpoint when it is necessary
    @RequestMapping(value = "/api/price", method = RequestMethod.POST)
    public ResponseEntity<Integer> getPrice(@RequestBody Pizza pizza) {
        int price = pizza.calculateFinalPrice();
        return new ResponseEntity<>(price, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/pizzaSizes", method = RequestMethod.GET)
    public ResponseEntity<List<Size>> getSizes() {
        List<Size> sizes = pizzaService.getAllSizes();
        return new ResponseEntity<>(sizes, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/pizzaIngredients", method = RequestMethod.GET)
    public ResponseEntity<List<Ingredient>> getIngredients() {
        List<Ingredient> ingredients = pizzaService.getAllIngredients();
        for (Ingredient ingredient : ingredients) {
            ingredient.setImageUrl("api/ingredient/" + ingredient.getName() + "/image");
        }
        return new ResponseEntity<>(ingredients, HttpStatus.OK);
    }

    @GetMapping(value = "/api/ingredient/{id}/image", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] image(@PathVariable String id) {
        Ingredient ingredient = pizzaService.getIngredientByID(id);
        return ingredient.getImage();
    }

}
