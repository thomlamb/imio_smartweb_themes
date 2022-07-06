def map = [
  Boussu  : "boussu",
  Cpas de Wavre: "wavrecpas"
]

pipeline {
  agent any
  options {
    timestamps()
  }
  stages {
    stage('Initialize') {
      steps {
        script {
          map.each { entry ->
            stage ("Build for $entry.key") {
              when {
                allOf{
                  branch "main"
                  not {
                    changelog '.*\\[(ci)?\\-?\\s?skip\\-?\\s?(ci)?\\].*'
                  }
                  changeset "$entry.value/**"
                }
              }
              steps {
                echo "$entry.value"
              }
            }
          }
        }
      }
    }
  }
}