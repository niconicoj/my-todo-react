pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '''-p 3000:3000
--network my-todo-network
--hostname todo-app'''
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