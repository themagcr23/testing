pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                //checkout scm // This Doesn't need this step because is doing it on the pipeline UI config
                echo "This step is configured in the pipeline UI"
            }
        }
        stage('JS Test') {
            steps {
              dir('Application'){
                bat "npm install"
                bat "npm run test"
              }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

/*
node {
  stage('SCM') {
    checkout scm
  }
  stage('JS Test'){
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