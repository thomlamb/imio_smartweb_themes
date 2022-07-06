@Library('jenkins-pipeline-scripts') _

pipeline {
  agent any
  options {
    timestamps()
  }
  stages {
    smartwebThemePipeline("boussu")
    smartwebThemePipeline("wavrecpas")
  }
}