(ns clojure-dojo.core-test
  (:require [clojure.test :refer :all]
            [clojure-dojo.core :refer :all]))



(defn rules [neighbours state]
  (if (or (and (= state :dead) (= neighbours 3)) (and (= state :alive) (or (= neighbours 2) (= neighbours 3)))) :alive :dead))

(defn is-same [x y cell]
  (and (= (first cell) x) (= (second cell) y)))

(defn abs [n] (max n (- n)))

(defn if-neighbour [x y cell]
  (if (and (not(is-same x y cell))(<= (abs (-(first cell) x)) 1) (<= (abs (-(second cell) y)) 1 )) 1 0))

(defn count-neighbours [x y world]
  (reduce + (map (partial if-neighbour x y) world))
 )

(deftest count-neigbour-test
  (testing "checks if cell is neighbour"
    (is (= (count-neighbours 0 0 [[0 1]]) 1))))

(deftest is-neigbour-test
  (testing "checks if cell is neighbour"
    (is (= (if-neighbour 0 0 [0 1]) 1))))

(deftest is-same-test
  (testing "checks if cell is neighbour is same"
    (is (= (is-same 0 0 [0 0]) true))))

(deftest abs-test
  (testing "checks if abs of value"
    (is (= (abs -5) 5))
    (is (= (abs 0) 0))
    (is (= (abs 5) 5))))


;(deftest count-neighbours-test
;  (testing "can count alive neighbours"
;    (is (= (count-neighbours 0 0 [[1 0]]) 1))))

(deftest first-rule-test
  (testing "check that live cell with fewer than two live neighbours dies"
    (is (= (rules 0 :alive) :dead))
    (is (= (rules 1 :alive) :dead))))

(deftest second-rule-test
  (testing "check that live cell with two or three live neighbours stays alive"
    (is (= (rules 2 :alive) :alive))
    (is (= (rules 3 :alive) :alive))))

(deftest third-rule-test
  (testing "check that live cell with more than three live neighbours dies"
    (is (= (rules 4 :alive) :dead))
    (is (= (rules 5 :alive) :dead))
    (is (= (rules 6 :alive) :dead))
    (is (= (rules 7 :alive) :dead))
    (is (= (rules 8 :alive) :dead))))

(deftest fourth-rule-test
  (testing "check that dead cell with three live neighbours will be alive"
    (is (= (rules 3 :dead) :alive))))

(deftest dead-stays-dead-test
  (testing "dead cell with other count of neighbours than 3 stays dead"
  (is (= (rules 0 :dead) :dead))
  (is (= (rules 1 :dead) :dead))
  (is (= (rules 2 :dead) :dead))
  (is (= (rules 4 :dead) :dead))
  (is (= (rules 5 :dead) :dead))
  (is (= (rules 6 :dead) :dead))
  (is (= (rules 7 :dead) :dead))
  (is (= (rules 8 :dead) :dead))))
