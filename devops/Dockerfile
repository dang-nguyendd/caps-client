# Start with Jenkins LTS with JDK 11
FROM jenkins/jenkins:lts-jdk11

# Switch to root user to install additional packages
USER root

# Install required packages for GitHub and SonarQube integration
RUN apt-get update && apt-get install -y git curl wget unzip

# Set the initial Jenkins admin user and password
ENV JENKINS_USER=admin
ENV JENKINS_PASS=admin

# Install Jenkins plugins and set up initial user
COPY --chown=jenkins:jenkins plugins.txt /usr/share/jenkins/ref/plugins.txt
COPY --chown=jenkins:jenkins devops/init.groovy.d/ /usr/share/jenkins/ref/init.groovy.d/
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt && \
    echo "jenkins.model.Jenkins.instance.securityRealm.createAccount('$JENKINS_USER', '$JENKINS_PASS')" > /usr/share/jenkins/ref/init.groovy.d/init-user.groovy

RUN mkdir -p /opt && chown -R jenkins:jenkins /opt

# Configure GitHub Credentials
RUN mkdir -p /var/jenkins_home/credentials/github
COPY devops/github/github-credentials.xml /var/jenkins_home/credentials/github/
RUN chown -R jenkins:jenkins /var/jenkins_home/credentials/github
RUN chmod 644 /var/jenkins_home/credentials/github/*

# Switch back to Jenkins user
USER jenkins

# Install SonarScanner
ENV SONAR_SCANNER_VERSION=4.6.2.2472
RUN curl -L -o /tmp/sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-$SONAR_SCANNER_VERSION-linux.zip && \
    unzip /tmp/sonar-scanner.zip -d /opt && \
    rm /tmp/sonar-scanner.zip
ENV PATH=$PATH:/opt/sonar-scanner-$SONAR_SCANNER_VERSION-linux/bin

# Switch to root user
USER root

# Configure GitHub Webhooks integration with SonarQube
COPY devops/github/sonarqube-github-webhook.xml /var/jenkins_home/
RUN chown -R jenkins:jenkins /var/jenkins_home/sonarqube-github-webhook.xml

# Copy Jenkinsfile into image
COPY jenkins/Jenkinsfile /var/jenkins_home/Jenkinsfile

# Expose Jenkins port
EXPOSE 8080

# Start Jenkins
CMD ["/usr/local/bin/jenkins.sh"]
