pipeline {
    agent {
            docker {
                image 'node:14.21.3'
                args '-p 3000:3000'
            }
        }
    stages {
        stages {
                stage('Install dependencies') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('Build') {
                     steps {
                        sh 'npm run build'
                     }
                }
                stage('Unit test') {
                    steps {
                        sh 'npm run test'
                    }
                }
        }
    }
}
