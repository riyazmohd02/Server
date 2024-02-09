pipeline {
    agent any
    environment {
        DOCKER_USERNAME = '9966167557'
        DOCKER_PASSWORD = 'Chanti77#'
        DOCKER_REGISTRY = 'docker.io'  // Docker Hub URL
        DOCKER_IMAGE_NAME = 'my-note-app'
        DOCKER_IMAGE_TAG = 'latest'
        DOCKER_FULL_IMAGE_NAME = "${DOCKER_REGISTRY}/${DOCKER_USERNAME}/${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/riyazmohd02/Server.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the image'
                sh "docker build -t ${DOCKER_IMAGE_NAME} ."
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    // Log in to the Docker registry
                    sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin ${DOCKER_REGISTRY}"

                    // Remove the old Docker image if it exists
                    sh "docker rm -f ${DOCKER_IMAGE_NAME} || true"

                    // Tag the Docker image
                    sh "docker tag ${DOCKER_IMAGE_NAME} ${DOCKER_FULL_IMAGE_NAME}"

                    // Push the Docker image to the registry
                    sh "docker push ${DOCKER_FULL_IMAGE_NAME}"
                }
            }
        }
    }
}
