package cz.gdgjihlava.coderetreat;

public class StringCalculator {


    private String getSeparator(String numbers) {
        String separator = ",";
        if (numbers.startsWith("//")) {
            separator = numbers.substring(2, numbers.indexOf("\n"));
        }
        return separator;
    }

    private String removeSeparatorDefinition(String numbers) {
       if (numbers.startsWith("//")) {
           numbers = numbers.substring(numbers.indexOf("\n")+1);
       }
        return numbers;
    }

    private int sumNumbers(int[] numbers) {
        int sum = 0;

        for (int number : numbers) {
            sum += number;
        }
        
        return sum;
    }

    private int[] splitNumbers(String numbers, String separator) {
        String numArray[] = numbers.split(",|\\n|" + separator);
        int[] resultArray = new int[numArray.length];
        for (int i = 0; i < numArray.length; i++) {
            resultArray[i] = Integer.parseInt(numArray[i]);
        }
        return resultArray;
    }

    public int add(String numbers) {
        String separator = getSeparator(numbers);
        numbers = removeSeparatorDefinition(numbers);
        int[] numArray = splitNumbers(numbers, separator);
        int sum = sumNumbers(numArray);

        return sum;
    }


}
