pipeline {
  agent any

  environment {
    NODE_VERSION = '14.16.1'
    SONARQUBE_SCANNER_VERSION = '4.6.2.2472'
    SONARQUBE_HOST = 'http://localhost:9000'
    SONARQUBE_TOKEN = credentials('sonarqube_token')
  }

  tools {
    nodejs 'nodejs-' + env.NODE_VERSION
    sonarqubeScanner env.SONARQUBE_SCANNER_VERSION
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Unit test'){
      steps {
        sh 'npm run test'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          sh 'npm install --save-dev sonarqube-scanner'
          sh 'sonar-scanner -Dsonar.projectKey=your_project_key -Dsonar.projectName=your_project_name -Dsonar.projectVersion=1.0 -Dsonar.sources=./src -Dsonar.host.url=$SONARQUBE_HOST -Dsonar.login=$SONARQUBE_TOKEN'
        }
      }
    }

    stage('Quality Gate') {
      steps {
        script {
          def qg = waitForQualityGate()
          if (qg.status != 'OK') {
            error "Pipeline aborted due to quality gate failure: ${qg.status}"
          }
        }
      }
    }
  }
}
