#!groovy
jenkins.model.Jenkins.instance.securityRealm.createAccount("admin", "admin")
