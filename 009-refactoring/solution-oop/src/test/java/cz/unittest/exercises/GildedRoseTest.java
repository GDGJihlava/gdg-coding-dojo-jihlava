package cz.unittest.exercises;

import static org.assertj.core.api.Assertions.assertThat;

import org.assertj.core.api.Assertions;
import org.junit.Test;

public class GildedRoseTest {

  @Test
  public void testItem() {
    ItemStandard[] items = new ItemStandard[] { new ItemStandard("Aged Brie", 2, 0) };

    GildedRose app = new GildedRose(items);
    app.updateQuality();

    Item expectedItem = ItemFactory.createItem("Aged Brie", 1, 1);
    Item updatedItem = app.items[0];

    Assertions.assertThat(updatedItem).isEqualToComparingFieldByField(expectedItem);
  }

}
