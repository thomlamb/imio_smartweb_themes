pipeline {
  agent any
  options {
    timestamps()
  }
  stages {
    stage('Build boussu') {
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
        echo "boussu"
        // make update foldername='boussu'
      }
    }
    stage('Build wavrecpas') {
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
        make update foldername="wavrecpas"
      }
    }
  }
}