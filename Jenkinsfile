pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy"){
            steps{
                sh "sudo rm -rf /var/www/ui2mvp7"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/ui2mvp7/"
            }
        }
    }
}
