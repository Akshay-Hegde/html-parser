

pipeline {
    agent { docker 'node:6-alpine' }

    environment {
        PROD_USER = credentials('PROD_USER'),
        PROD_HOST_IP = credentials('PROD_HOST_IP'),
        PROD_SSH_KEY_PATH = credentials('PROD_SSH_KEY_PATH'),
        RELEASE_DOMAIN = 'parser.maartendev.me'
    }

    stages {
        stage('Unit Tests'){
            steps {
                sh './node_modules/jest/bin/jest.js --coverage'
                junit 'coverage/clover.xml'
            }
        }

        stage('build'){
            steps {
                sh 'npm run build'
            }
        }

        stage('deploy'){
            agent {
                label 'master'
            }
            steps {
                sh "ssh ${PROD_USER}@${PROD_HOST_IP} -i ${PROD_SSH_KEY_PATH} 'rm -rf /var/www/${RELEASE_DOMAIN}/*'"
                sh "scp -i ${PROD_SSH_KEY_PATH} ${PROD_USER}@${PROD_IP}:/var/www/${RELEASE_DOMAIN}/ ${WORKSPACE}/* "
            }
        }
    }
}
