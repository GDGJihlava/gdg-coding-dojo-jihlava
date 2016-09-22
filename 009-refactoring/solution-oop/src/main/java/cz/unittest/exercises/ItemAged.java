package cz.unittest.exercises;

public class ItemAged extends ItemStandard {
    public ItemAged(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }


    protected void updateExpiredItem() {
        if (sellIn < 0) {
            increaseQualityWithLimit();
        }
    }

    protected void updateItemQuality() {
        increaseQualityWithLimit();
    }

}
