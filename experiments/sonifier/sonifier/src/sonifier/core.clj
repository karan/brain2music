(ns sonifier.core
  (:gen-class))

(use 'overtone.live)
(use 'overtone.inst.sampled-piano)
(require '[cheshire.core :as json])

(while true
  (with-open [reader (clojure.java.io/reader "/tmp/brain-data")]
    (let [beta-wave (-> (first (line-seq reader)) (json/decode ((json/decode true) :eegPower) :highBeta))]
      (println beta-wave)
      (sampled-piano :note (beta-wave->pitch beta-wave) :sustain 0.2))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
