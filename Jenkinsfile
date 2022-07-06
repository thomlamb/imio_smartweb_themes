def folders = [
  "boussu",
  "wavrecpas"
]

pipeline {
  agent any
  options {
    timestamps()
  }
  stages {
    stage('Initialize') {
      steps {
        sh 'printenv'
        script {
          map.each { entry ->
            stage ("Build for $entry.key") {
              if (env.BRANCH_NAME == "main") {
                  // not {
                  //   changelog '.*\\[(ci)?\\-?\\s?skip\\-?\\s?(ci)?\\].*'
                  // }
                  // changeset "$entry.value/**"
                echo "$entry.value"
              }              
            }
          }
        }
      }
    }
  }
}