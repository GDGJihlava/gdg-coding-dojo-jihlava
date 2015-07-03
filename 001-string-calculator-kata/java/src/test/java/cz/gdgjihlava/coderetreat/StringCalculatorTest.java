package cz.gdgjihlava.coderetreat;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class StringCalculatorTest {

	private StringCalculator stringCalculator;

	@Before
	public void setUp() {
		stringCalculator = new StringCalculator();
	}

	@Test
	public void shouldReturnZeroForEmptyString() {
		assertEquals(0, stringCalculator.add(""));
	}

    @Test
    public void shouldReturnNumberForSingleNumber() {
        assertEquals(1, stringCalculator.add("1"));
    }

    @Test
    public void shouldAddUnknownNumbers() {
        assertEquals(2, stringCalculator.add("1,1"));
        assertEquals(3, stringCalculator.add("1,2"));
        assertEquals(4, stringCalculator.add("2,2"));
        assertEquals(8, stringCalculator.add("5,3"));
        assertEquals(9, stringCalculator.add("3,6"));
        assertEquals(6, stringCalculator.add("1,1,4"));
        assertEquals(4, stringCalculator.add("1,2,1"));
    }

    @Test
    public void shouldSupportNewLineSeparators()  {
        assertEquals(3, stringCalculator.add("1\n2"));
        assertEquals(6, stringCalculator.add("1\n1,4"));
        assertEquals(4, stringCalculator.add("1,2\n1"));
    }


    @Test
    public void shouldSupportCustomDelimiters() {
        assertEquals(3, stringCalculator.add("//;\n1;2"));
        assertEquals(3, stringCalculator.add("//;;\n1;;2"));
    }

}