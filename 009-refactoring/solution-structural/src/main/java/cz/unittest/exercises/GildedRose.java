package cz.unittest.exercises;

class GildedRose {
    Item[] items;

    public GildedRose(Item[] items) {
        this.items = items;
    }

    public void updateQuality() {
        for (Item item : items) {
            updateItem(item);
        }
    }

    private void updateItem(Item item) {
        if (isImmutable(item)) return;
        updateItemQuality(item);
        updateSellIn(item);
        updateExpiredItem(item);
    }

    private void updateSellIn(Item item) {
        item.sellIn = item.sellIn - 1;
    }

    private boolean isImmutable(Item item) {
        return item.name.equals("Sulfuras, Hand of Ragnaros");
    }

    private void updateExpiredItem(Item item) {
        if (item.sellIn < 0) {
            if (item.name.equals("Aged Brie")) {
                increaseQualityWithLimit(item);
            } else if (item.name.equals("Backstage passes to a TAFKAL80ETC concert")) {
                item.quality = 0;
            } else {
                decreaseQuality(item);
            }
        }
    }

    private void updateItemQuality(Item item) {
        if (item.name.equals("Aged Brie")) {
            increaseQualityWithLimit(item);
        } else if (item.name.equals("Backstage passes to a TAFKAL80ETC concert")) {
            increaseQualityWithLimit(item);
            if (item.sellIn < 11) {
                increaseQualityWithLimit(item);
            }

            if (item.sellIn < 6) {
                increaseQualityWithLimit(item);
            }
        } else {
            decreaseQuality(item);
        }
    }

    private void decreaseQuality(Item item) {
        if (item.quality > 0) {
            item.quality = item.quality - 1;
        }
    }

    private void increaseQualityWithLimit(Item item) {
        if (item.quality < 50) {
            item.quality = item.quality + 1;
        }
    }
}
