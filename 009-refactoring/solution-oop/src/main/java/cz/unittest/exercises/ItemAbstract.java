package cz.unittest.exercises;

public abstract class ItemAbstract implements Item {
    public String name;
    public int sellIn;
    public int quality;

    public ItemAbstract(String name, int sellIn, int quality) {
        this.quality = quality;
        this.name = name;
        this.sellIn = sellIn;
    }

    @Override
    public String toString() {
        return this.name + ", " + this.sellIn + ", " + this.quality;
    }

    protected void updateSellIn() {
        sellIn = sellIn - 1;
    }

    protected void decreaseQuality() {
        if (quality > 0) {
            quality = quality - 1;
        }
    }

    protected void increaseQualityWithLimit() {
        if (quality < 50) {
            quality = quality + 1;
        }
    }
}
