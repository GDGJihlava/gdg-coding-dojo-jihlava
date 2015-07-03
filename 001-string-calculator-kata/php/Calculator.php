<?php

class Calculator {
    const DELIMITER = ",";

    private function parseStringToArrayOfInts($inputString) {

        $replaceTable = array(
            "\n" => self::DELIMITER
        );
        
        if (strpos($inputString, '//') === 0) {
            $replaceTable[$inputString[2]] = self::DELIMITER;
            $inputString = str_replace('//' . $inputString[2], '', $inputString);
        }
        $normalizedString = strtr($inputString, $replaceTable);
        return explode(self::DELIMITER, $normalizedString);
    }

    private function checkNegatives(array $numbers) {
        $negatives = array_filter($numbers, function($item) {
            return $item < 0;
        });
        if (count($negatives) > 0) {
            throw new Exception('negatives not allowed ' . implode(",", $negatives));
        }
    }

    private function sumNumbers(array $numbers) {
        return array_reduce($numbers, function($sum, $item) {
            return (int) $sum + $item;
        }, 0);
    }

    public function add($numbers) {
        $inputNumbers = $this->parseStringToArrayOfInts($numbers);
        $this->checkNegatives($inputNumbers);
        return $this->sumNumbers($inputNumbers);
    }

}
