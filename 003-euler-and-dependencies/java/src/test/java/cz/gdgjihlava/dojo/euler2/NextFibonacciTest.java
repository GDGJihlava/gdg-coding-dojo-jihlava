package cz.gdgjihlava.dojo.euler2;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class NextFibonacciTest {

	private NextFibonacci nextFibbonaci;

	@Before
	public void setUp() {
		nextFibbonaci = new NextFibonacci();
	}

	@Test
	public void testNext() {
		Assert.assertEquals(1, nextFibbonaci.next());
		Assert.assertEquals(2, nextFibbonaci.next());
		Assert.assertEquals(3, nextFibbonaci.next());
		Assert.assertEquals(5, nextFibbonaci.next());
	}
}