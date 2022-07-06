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
    stage('Build and deploy') {
      parallel {
        stage('boussu') {
          when {
            allOf{
              branch "main"
              not {
                changelog '.*\\[(ci)?\\-?\\s?skip\\-?\\s?(ci)?\\].*'
              }
              changeset "boussu/**"
            }
          }
          steps {
            smartwebThemePipeline("boussu")
          }
        }
        stage('wavrecpas') {
          when {
            allOf{
              branch "main"
              not {
                changelog '.*\\[(ci)?\\-?\\s?skip\\-?\\s?(ci)?\\].*'
              }
              changeset "wavrecpas/**"
            }
          }
          steps {
            smartwebThemePipeline("wavrecpas")
          }
        }
      }
    }
  }
}