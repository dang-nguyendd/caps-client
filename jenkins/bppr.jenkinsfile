pipeline {
    agent any
    stages {
        stage('Get changed files') {
            steps {
                script {
                    def diffCommand = "git diff --name-only origin/${params.PR_SOURCE_BRANCH.replaceAll('refs/heads/', '')} " +
                            "`git merge-base origin/${params.PR_SOURCE_BRANCH.replaceAll('refs/heads/', '')} origin/${params.PR_TARGET_BRANCH.replaceAll('refs/heads/', '')}`"
                    listDiffFile = sh(script: diffCommand, returnStdout: true).trim().split("\\r?\\n")
                    echo "Update files: \n"
                    listDiffFile.each { file ->
                        if (!isConfigFile(file)) {
                            listDiffFile -= file
                        }
                    }
                    listDiffFile.each { file -> println file }
                    if (listDiffFile.size() == 0) {
                        skipChecking = true
                    }
                }
            }
        }
    }
}
