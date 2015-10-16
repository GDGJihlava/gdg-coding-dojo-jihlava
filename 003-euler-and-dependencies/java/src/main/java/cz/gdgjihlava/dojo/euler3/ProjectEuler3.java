package cz.gdgjihlava.dojo.euler3;

public class ProjectEuler3 {

	//not used
	public boolean isPrimeNumber(long number) {
		for (int i = 2; i < Math.sqrt(number); i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}

	public boolean isFactor(long number, long factor) {
		return number % factor == 0;
	}

	public long largestPrimeFactor(long number) {
		for (long i = 1; i < Math.sqrt(number); i++) {
			if (isFactor(number, i)) {
				number /= i;
			}
		}
		return number;
	}

	public static void main(String[] args) {
		System.out.println(new ProjectEuler3().largestPrimeFactor(600851475143L));
	}

}
