pipeline{
    agent any
    triggers {
        githubPush()
    }
    stages{
        stage("Build"){
            steps{
                sh "npm i --save @fortawesome/fontawesome-svg-core"
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
