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

# Configure GitHub Credentials
COPY devops/github/github-credentials.xml /usr/share/jenkins/ref/credentials.xml

# Configure multi-branch pipeline using GitHub repository
COPY devops/github/multi-branch-pipeline-config.xml /usr/share/jenkins/ref/

# Add Jenkinsfiles for each pipeline
COPY devops/jenkins/ /var/jenkins_home/caps-client/jenkins/
RUN chown -R jenkins:jenkins /var/jenkins_home/caps-client/jenkins/

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

# Expose Jenkins port
EXPOSE 8080

# Start Jenkins
CMD ["/usr/local/bin/jenkins.sh"]
