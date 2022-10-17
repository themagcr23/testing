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
    steps{
      dir('Application'){
        withSonarQubeEnv() {
          bat "${scannerHome}/bin/sonar-scanner"
        }
      }
      
    }
    
  }
}

/*
pipeline {
    agent any
    stages {
        stage('SonarQube Analysis'){
            steps{
              dir('Application'){
                bat "echo 1 - %cd%"
                  withSonarQubeEnv('SonarQube instance') {
                    bat "npm install "
                    bat "npm install sonar-scanner"
                    bat "echo 2 - %cd%"
                    bat "npm run sonar"
                  }
              }
              
            }
        }
    }
}
*/