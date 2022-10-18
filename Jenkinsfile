node {
  stage('SCM') {
    checkout scm
  }
  stage('JS Test'){
    dir('Application'){
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
}


