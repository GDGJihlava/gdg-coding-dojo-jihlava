(ns coderetreat-sandbox.gol-test
  (:require [clojure.test :refer :all]
            [coderetreat-sandbox.gol :refer :all]))

(deftest get-neighbours-test
  (testing "neighbours"
    (is (=
          (get-neighbours-coords [0 0])
          `([-1 -1] [-1 0] [-1 1]
             [0 -1] [0 1]
             [1 -1] [1 0] [1 1])))))

(deftest rule1-test
  (testing "living cells dies with less than 2 neighbours"
    (is (= (rules :alive 1) false))))

(deftest rule2-test
  (testing "Live cell with 2 or 3 live neighbours lives"
    (is (= (rules :alive 2) true))
    (is (= (rules :alive 3) true))))

(deftest rule3-test
  (testing "Live cell with more than 3 live neighbours die"
    (is (= (rules :alive 4) false))))

(deftest rule4-test
  (testing "Dead cell with 3 live neighbours live"
    (is (= (rules :dead 3) true))))

(deftest rule-dead-test
  (testing "Dead cell 2 live neighbours will be dead"
    (is (= (rules :dead 2) false))))