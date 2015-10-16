package cz.gdgjihlava.dojo.euler2;

public class ProjectEuler2 {

	public boolean isEvenNumber(int number) {
		return number % 2 == 0;
	}

	public int countFibbonaci(int maxnumber) {
		NextFibonacci fibGen = new NextFibonacci();
		int sum = 0;
		while (fibGen.next() <= maxnumber) {
			if (isEvenNumber(fibGen.getActual())) {
				sum += fibGen.getActual();
			}
		}
		return sum;
	}

	public static void main(String[] args) {
		System.out.println(new ProjectEuler2().countFibbonaci(4000000));
	}
}
