(ns coderetreat-sandbox.gol-improved)

(defn rules
  [state no-of-neighbours]
  (or
    (and (= state :alive)
         (<= 2 no-of-neighbours 3))
    (and (= state :dead)
         (= no-of-neighbours 3))))

(defn get-state
  [location world]
  (if (contains? world location)
    :alive
    :dead))

(defn get-neighbours-coords
  [[x y]]
  (for
    [dx [-1 0 1]
     dy [-1 0 1]
     :when (not (= dx dy 0))]
    [(+ x dx)
     (+ y dy)]))

(defn rules-for-world
  [world]
  (fn
    [[location count]]
    (let
      [state (get-state location world)]
      (if (rules state count)
        location
        nil))))

(defn next-step
  [world]
  (let
    [counts (->> world
                 (map get-neighbours-coords)
                 (apply concat)
                 frequencies)
     rules (rules-for-world world)]

    (->> counts
         (filter #(rules %1))
         (map first)
         (into #{}))))
