<?php

class CalculatorTest extends PHPUnit_Framework_TestCase {

  /**
   * @var Calculator
   */
  protected $calculator;

  protected function setUp() {
    $this->calculator = new Calculator;
  }

  /**
   * @test
   */
  public function emptyStringIsZero() {
    $this->assertEquals(0, $this->calculator->add(""));
  }
  
  /**
   * @test
   */
  public function oneNumberStringIsSameValue() {
    $this->assertEquals(1, $this->calculator->add("1"));
  }
  
  /**
   * @test
   */
  public function twoNumberStringReturnsSum() {
    $this->assertEquals(3, $this->calculator->add("1,2"));
  }

  /**
   * @test
   */
  public function threeNumberStringReturnsSum() {
    $this->assertEquals(6, $this->calculator->add("1,2,3"));
  }
  /**
   * @test
   */
  public function newLineAsSeparator() {
    $this->assertEquals(6, $this->calculator->add("1\n2,3"));
  }
  /**
   * @test
   */
  public function customSeparatorGivenOnInputStart() {
    $this->assertEquals(3, $this->calculator->add("//;\n1;2"));
  }
  /**
   * @test
   * @expectedException Exception
   */
  public function negativeNumbersThroesException() {
    $this->calculator->add("//;\n1;-2");
  }
  
 /**
   * @test
   * @expectedException Exception
   * @expectedExceptionMessage negatives not allowed -2,-5
   */
  public function negativeNumbersThroesExceptionWithDump() {
    $this->calculator->add("//;\n1;-2;-5");
  }

  
  }
