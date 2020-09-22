package ch.supsi.webapp.web.services;

import ch.supsi.webapp.web.model.Ingredient;
import ch.supsi.webapp.web.model.Size;
import ch.supsi.webapp.web.repository.IngredientRepository;
import ch.supsi.webapp.web.repository.SizeRepository;
import org.aspectj.util.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;


@Service
public class PizzaService {

    @Autowired
    SizeRepository sizeRepo;

    @Autowired
    IngredientRepository ingredientRepo;


    @PostConstruct
    public void init() throws IOException {

        if (sizeRepo.findAll().size() == 0) {
            sizeRepo.save(new Size("PICCOLA", 8));
            sizeRepo.save(new Size("NORMALE", 10));
            sizeRepo.save(new Size("FAMIGLIARE", 16));
        }

        if (ingredientRepo.findAll().size() == 0) {
            ingredientRepo.save(new Ingredient("OLIVE", 2, getImage("olive.png")));
            ingredientRepo.save(new Ingredient("FUNGHI", 4, getImage("funghi.png")));
            ingredientRepo.save(new Ingredient("VERDURE", 5, getImage("verdure.png")));
            ingredientRepo.save(new Ingredient("PROSCIUTTO", 5, getImage("prosciutto.png")));
        }
    }

    public Ingredient getIngredientByID(String id) {
        return ingredientRepo.getOne(id);
    }

    public List<Ingredient> getAllIngredients() {
        return ingredientRepo.findAll();
    }

    public List<Size> getAllSizes() {
        return sizeRepo.findAll();
    }

    public Size getPizzaSize(String sizeName) {
        return sizeRepo.getOne(sizeName);
    }

    public List<Ingredient> getIngredients(List<String> ingredients) {
        return ingredientRepo.findAllById(ingredients);
    }

    public byte[] getImage(String imageName) throws IOException {
        return FileUtil.readAsByteArray(this.getClass().getResourceAsStream("/images/" + imageName));
    }


}
