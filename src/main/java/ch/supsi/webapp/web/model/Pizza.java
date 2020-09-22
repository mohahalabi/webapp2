package ch.supsi.webapp.web.model;

import java.util.List;


// No need to persist the pizza for now as it is not required. Persisting the size and ingredients is
// enough to calculate the price

public class Pizza {

    private Size size; // One to one relation in case of persisting the pizza entity
    private List<Ingredient> ingredients; // One to many relation in case of persisting the pizza entity


    public Pizza(Size size, List<Ingredient> ingredients) {
        this.size = size;
        this.ingredients = ingredients;
    }

    public Pizza() {
    }

    public int calculateFinalPrice() {
        int finalPrice = size.getPrice();
        for (Ingredient ingredient : ingredients) {
            finalPrice += ingredient.getPrice();
        }
        return finalPrice;
    }

    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public String toString() {
        return "Pizza{" +
                "size=" + size +
                ", ingredients=" + ingredients +
                '}';
    }
}
