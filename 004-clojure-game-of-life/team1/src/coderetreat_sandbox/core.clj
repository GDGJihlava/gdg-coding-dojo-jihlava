(ns coderetreat-sandbox.core
  (:require
    [clojure.pprint]
    [coderetreat-sandbox.gol :as gol]))

(defn -main
  []

  (def world
    (hash-set [1 0] [0 0] [-1 0]))

  (def step1 (gol/next-step world))
  (def step2 (gol/next-step step1))
  (def step3 (gol/next-step step2))
  (def step4 (gol/next-step step3))

  (clojure.pprint/pprint [world step1 step2 step3 step4]))