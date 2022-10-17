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

/*
node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'sonarQube scanner';
    steps{
      bat "cd Application"
      bat "npm install"
      withSonarQubeEnv() {
        bat "${scannerHome}/bin/sonar-scanner"
      }
    }
    
  }
}*/

pipeline {
    agent any
    stages {
        stage('SonarQube Analysis'){
            steps{
              withSonarQubeEnv('SonarQube instance') {
                //bat "cd Application && echo %cd% && npm install && npm install sonar-scanner"
                bat "echo 1 - %cd%"
                bat "cd Application && echo 2 - %cd%"
                bat "3- echo %cd%"
                //bat "cd Application && npm run sonar"
              }
            }
        }
    }
}