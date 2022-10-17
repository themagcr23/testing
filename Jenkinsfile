/* Requires the Docker Pipeline plugin */
/*
pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'node --version'
            }
        },
        stage('testing code'){
            steps{
                bat 'cd TestingProject && npm run test'
            }
        }
    }
}
*/

node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}