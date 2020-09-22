package ch.supsi.webapp.web.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Size {

    @Id
    private String name;

    private int price;

    public Size(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public Size() {
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
