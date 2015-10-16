package cz.gdgjihlava.dojo.euler2;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ProjectEuler2Test {

	private ProjectEuler2 projectEuler2;

	@Before
	public void setUp() throws Exception {
		projectEuler2 = new ProjectEuler2();
	}

	@Test
	public void testIsEvenNumber() throws Exception {
		assertFalse(projectEuler2.isEvenNumber(3));
		assertTrue(projectEuler2.isEvenNumber(2));
	}

	@Test
	public void testcountFibbonaci() {
		assertEquals(10, projectEuler2.countFibbonaci(8));
		assertEquals(10, projectEuler2.countFibbonaci(13));
		assertEquals(10, projectEuler2.countFibbonaci(30));
	}

	@Test
	public void testFinalAnswer() {
		assertEquals(4613732, projectEuler2.countFibbonaci(4000000));
	}

}