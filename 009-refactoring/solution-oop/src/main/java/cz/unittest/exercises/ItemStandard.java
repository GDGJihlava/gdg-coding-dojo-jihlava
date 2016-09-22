package cz.unittest.exercises;

public class ItemStandard extends ItemAbstract {

    public ItemStandard(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    public void update() {
        updateItemQuality();
        updateSellIn();
        updateExpiredItem();
    }

    protected void updateExpiredItem() {
        if (sellIn < 0) {
            decreaseQuality();
        }
    }

    protected void updateItemQuality() {
        decreaseQuality();
    }

}
