package cz.unittest.exercises;

public class ItemPasses extends ItemStandard {
    public ItemPasses(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    protected void updateExpiredItem() {
        if (sellIn < 0) {

            quality = 0;

        }
    }

    protected void updateItemQuality() {

        increaseQualityWithLimit();
        if (sellIn < 11) {
            increaseQualityWithLimit();
        }

        if (sellIn < 6) {
            increaseQualityWithLimit();
        }

    }
}
