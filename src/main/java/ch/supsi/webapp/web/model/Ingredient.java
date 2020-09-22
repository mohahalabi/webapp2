package ch.supsi.webapp.web.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Transient;


@Entity
public class Ingredient {

    @Id
    private String name;

    @Lob
    @JsonIgnore // We don't want to return the image with json to the frontend as we send the url
    private byte[] image;

    @Transient
    private String imageUrl; // We don't need to persist the url, we can construct it using the id (name)

    private int price;

    public Ingredient(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public Ingredient(String name, int price, byte[] image) {
        this.name = name;
        this.image = image;
        this.price = price;
    }

    public Ingredient() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public byte[] getImage() {
        return image;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Ingredient{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
