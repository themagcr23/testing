node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    dir('Application'){
      def scannerHome = tool 'sonarQube scanner';
      withSonarQubeEnv() {
        bat "${scannerHome}/bin/sonar-scanner"
      }
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