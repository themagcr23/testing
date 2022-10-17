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
    def scannerHome = tool 'sonarQube scanner';
    withSonarQubeEnv() {
      bat "cd Application && echo feito"
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
}