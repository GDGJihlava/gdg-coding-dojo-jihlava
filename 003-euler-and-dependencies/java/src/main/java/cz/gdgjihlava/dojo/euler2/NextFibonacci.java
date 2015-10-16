package cz.gdgjihlava.dojo.euler2;

public class NextFibonacci {
	private int f1;
	private int f2;
	private int actual;

	public NextFibonacci() {
		f1 = 0;
		f2 = 1;
	}

	public int next() {
		actual = f1 + f2;

		f1 = f2;
		f2 = actual;

		return actual;
	}

	public int getActual() {
		return actual;
	}
}
