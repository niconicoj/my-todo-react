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
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deliver') {
      steps {
        sh 'npm run start'
      }
    }
  }
}