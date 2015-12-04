(ns coderetreat-sandbox.gol)

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
  [location]
  (let
    [x (get location 0)
     y (get location 1)]
    (for
      [dx [-1 0 1]
       dy [-1 0 1]
       :when (not (= dx dy 0))]
      [(+ x dx)
       (+ y dy)])))

(defn apply-rule
  [world location-and-count]
  (let
    [location (get location-and-count 0)
     count (get location-and-count 1)
     state (get-state location world)]
    (if (rules state count)
      location
      nil)))

(defn next-step
  [world]
  (let
    [counts (frequencies
              (apply concat
                     (map get-neighbours-coords world)))]
    (into #{}
          (map first
               (filter
                 #(apply-rule world %1)
                 counts)))))