package cz.unittest.exercises;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(Parameterized.class)
public class GildedRoseParametrizedTest {

  private Item original;
  private Item expected;

  public GildedRoseParametrizedTest(Item original, Item expected) {
    this.original = original;
    this.expected = expected;
  }

  @Parameterized.Parameters(name = "testItem {0}")
  public static Object[][] parameters() throws Exception {

    return new Object[][]{
      {
        ItemFactory.createItem("+5 Dexterity Vest", 10, 20),
        ItemFactory.createItem("+5 Dexterity Vest", 9, 19)
      },{
        ItemFactory.createItem("+5 Dexterity Vest", -1, 2),
        ItemFactory.createItem("+5 Dexterity Vest", -2, 0)
      },
      {
        ItemFactory.createItem("Aged Brie", 2, 0),
        ItemFactory.createItem("Aged Brie", 1, 1)
      },{
        ItemFactory.createItem("Aged Brie", -2, 0),
        ItemFactory.createItem("Aged Brie", -3, 2)
      },
      {
        ItemFactory.createItem("Elixir of the Mongoose", 5, 7),
        ItemFactory.createItem("Elixir of the Mongoose", 4, 6)
      },
      {
        ItemFactory.createItem("Sulfuras, Hand of Ragnaros", 0, 80),
        ItemFactory.createItem("Sulfuras, Hand of Ragnaros", 0, 80)
      },
      {
        ItemFactory.createItem("Sulfuras, Hand of Ragnaros", -1, 80),
        ItemFactory.createItem("Sulfuras, Hand of Ragnaros", -1, 80)
      },
      {
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 14, 21)
      }, {
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 10, 45),
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 9, 47)
      },{
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 4, 45),
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 3, 48)
      },{
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", -1, 45),
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", -2, 0)
      },
      {
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 9, 50)
      },
      {
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
        ItemFactory.createItem("Backstage passes to a TAFKAL80ETC concert", 4, 50)
      }
    };
  }

  @Test
  public void testItem() {
    Item[] items = new Item[]{original};
    GildedRose app = new GildedRose(items);
    app.updateQuality();

    Item modifiedItem = app.items[0];

    assertThat(modifiedItem)
      .isEqualToComparingFieldByField(expected);
  }
}
