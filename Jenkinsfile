pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '''-p 3000:3000
--network default_network
--hostname todo-app
--network-alias=mytodo.niconico.io
-e "VIRTUAL_HOST=mytodo.niconico.io"
-e "VIRTUAL_PORT=3000"'''
    }
  }
  environment {
    CI = 'true' 
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install -g serve'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh './scripts/test.sh'
      }
    }
    stage('Deliver') {
      steps {
        sh './scripts/deliver.sh' 
        input message: 'Finished using the web site? (Click "Proceed" to continue)' 
        sh './scripts/kill.sh' 
      }
    }
  }
}