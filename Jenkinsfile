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
}