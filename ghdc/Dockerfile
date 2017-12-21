FROM debian:wheezy

MAINTAINER Simon <simon.mulquin@gmail.com>

# Update system
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && \
    apt-get upgrade -qq -y --no-install-recommends && \
    apt-get install -qq -y --no-install-recommends \
      # CURL
      ca-certificates curl wget \
      # SCM
      bzr git mercurial openssh-client subversion \
      # Build
      build-essential g++ make libc6 && \
    apt-get autoremove -qq -y && \
    apt-get autoclean -qq -y && \
    rm -rf /var/lib/apt/lists/*

# Install NodeJS
ENV NODE_VERSION 4.8.4
ENV NPM_VERSION 2.15.8
RUN curl -sSLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz" && \
    tar -xzf "node-v$NODE_VERSION-linux-x64.tar.gz" -C /usr/local --strip-components=1 && \
    rm "node-v$NODE_VERSION-linux-x64.tar.gz" && \
    npm install -g npm@"$NPM_VERSION" && \
    npm cache clear --force

# Add PM2 for process management and PhantomJS
#RUN npm install -g phantomjs-prebuilt

# Import sources
COPY bundle /app
RUN curl https://install.meteor.com/?release=1.5.1 | sh
RUN mkdir build && cd /app && meteor npm i -g yarn && meteor yarn install && meteor build --architecture os.linux.x86_64 --allow-superuser --directory /build
# Install Meteor's dependencies
WORKDIR /build/bundle
#RUN rm -rf programs/server/npm/node_modules/
#RUN (rm -rf /app/programs/server/npm/node_modules/meteor/npm-bcrypt && npm install bcrypt)
RUN (cd /build/bundle/programs/server && npm install && npm rebuild) # npm install meteor-deque meteor-babel mongodb)
# Launch application
COPY startMeteor.sh /build/bundle/startMeteor.sh
CMD ["sh","/build/bundle/startMeteor.sh"]

