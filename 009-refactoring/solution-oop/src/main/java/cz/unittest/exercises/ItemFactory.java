package cz.unittest.exercises;

public class ItemFactory {
    public static ItemAbstract createItem(String name, int sellIn, int quality) {
        if (name.equals("Sulfuras, Hand of Ragnaros")) {
            return new ItemImmutable(name, sellIn, quality);
        } else if (name.equals("Aged Brie")) {
            return new ItemAged(name, sellIn, quality);
        } else if (name.equals("Backstage passes to a TAFKAL80ETC concert")) {
            return new ItemPasses(name, sellIn, quality);
        } else {
            return new ItemStandard(name, sellIn, quality);
        }
    }
}
