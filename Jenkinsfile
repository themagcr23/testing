/*
node {
  stage('SCM') {
    checkout scm
    echo 'FEATURE A'
  }
  stage('JS Test'){cd zs  
    dir('Application'){
      bat "npm install"
      bat "npm run test"
    }
  }
  stage('SonarQube Analysis') {
    dir('Application'){
      def scannerHome = tool 'sonarQube scanner';
      withSonarQubeEnv() {
        bat "${scannerHome}/bin/sonar-scanner"
      }
    }
    
  }

  stage("Quality Gate") {
    timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
      def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
      if (qg.status != 'OK') {
        error "Pipeline aborted due to quality gate failure: ${qg.status}"
      }
    }
  }
}
*/
pipeline {
    agent any

    stages {
        stage('teste 1') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
