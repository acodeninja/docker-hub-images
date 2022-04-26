FROM node:11

# Install wineHQ binaries
RUN dpkg --add-architecture i386
RUN wget -nc https://dl.winehq.org/wine-builds/Release.key
RUN apt-key add Release.key
RUN apt-get update && apt-get install --no-install-recommends -y apt-transport-https && apt-get clean
RUN echo 'deb https://dl.winehq.org/wine-builds/debian/ stretch main' >> /etc/apt/sources.list
RUN apt-get update && apt-get install --no-install-recommends -y libopenjp2-tools winehq-stable && apt-get clean

