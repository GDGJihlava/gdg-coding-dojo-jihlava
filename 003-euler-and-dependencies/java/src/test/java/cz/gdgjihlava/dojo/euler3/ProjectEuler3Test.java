package cz.gdgjihlava.dojo.euler3;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ProjectEuler3Test {

	private ProjectEuler3 projectEuler3;

	@Before
	public void setUp() {
		projectEuler3 = new ProjectEuler3();
	}

	@Test
	public void testIsPrimeNumber() {
		Assert.assertTrue(projectEuler3.isPrimeNumber(5));
		Assert.assertTrue(projectEuler3.isPrimeNumber(13));
		Assert.assertFalse(projectEuler3.isPrimeNumber(44800));
		Assert.assertFalse(projectEuler3.isPrimeNumber(22));
	}

	@Test
	public void testIsFactor() {
		Assert.assertTrue(projectEuler3.isFactor(15, 5));
		Assert.assertFalse(projectEuler3.isFactor(10, 4));
	}

	@Test
	public void testLargestPrimeFactor() {
		Assert.assertEquals(5, projectEuler3.largestPrimeFactor(10));
	}

	@Test
	public void testFinalAnswer() {
		Assert.assertEquals(6857, projectEuler3.largestPrimeFactor(600851475143L));
	}


}