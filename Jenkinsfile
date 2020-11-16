pipeline{
    agent any
    triggers {
        githubPush()
    }
    stages{
        stage("Add Packages"){
            steps{
                sh "npm i --save @fortawesome/fontawesome-svg-core"
                sh "npm install --save @fortawesome/free-solid-svg-icons"
                sh "npm install --save @fortawesome/react-fontawesome"
            }
        }
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
