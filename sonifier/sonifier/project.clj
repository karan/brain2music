(defproject sonifier "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"],
                 [overtone "0.9.1"],
                 [cheshire "5.4.0"]]
  :main ^:skip-aot sonifier.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
