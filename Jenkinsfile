@Library('jenkins-pipeline-scripts') _

pipeline {
  agent any
  options {
    timestamps()
  }
  stages {
    stage("Build boussu") {
      smartwebThemePipeline("boussu")
    }
    stage("Build wavrecpas") {
      smartwebThemePipeline("wavrecpas")
    }
  }
}