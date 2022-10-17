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
            def scannerHome = tool 'sonarQube scanner';
            steps{
              bat "cd Application"
              bat "npm install"
              withSonarQubeEnv() {
                bat "${scannerHome}/bin/sonar-scanner"
              }
            }
        }
    }
}