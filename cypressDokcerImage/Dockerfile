FROM cybi/cybi
WORKDIR /usr/src/cypress
COPY package.json /usr/src/cypress/package.json 
COPY cypress.json /usr/src/cypress/cypress.json
COPY cypress-ui /usr/share/nginx/html
RUN touch /var/run/nginx.pid &&\
    mkdir -p /var/lib/nginx/body/var/lib/nginx /usr/src/cypress &&\
    chmod -R 777 /var/run /var/log/nginx /var/lib/nginx /usr/src/cypress /usr/share/nginx &&\
    mv /root/.cache /home/node/.cache &&\
    npm install
USER node
ENV CYPRESS_CACHE_FOLDER=/home/node/.cache/Cypress
ENV CYPRESS_PORT=8080
ENV GIT_SSL_NO_VERIFY=1
EXPOSE 8081