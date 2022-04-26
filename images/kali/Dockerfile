FROM lukaszlach/kali-desktop:xfce

RUN gpg --keyserver pgpkeys.mit.edu --recv-key  ED444FF07D8D0BF6; \
    gpg -a --export ED444FF07D8D0BF6 | apt-key add -

RUN apt --fix-missing update

RUN DEBIAN_FRONTEND=noninteractive apt-get -y install libcrypt1

RUN DEBIAN_FRONTEND=noninteractive apt full-upgrade -y -f || apt-get --fix-broken install -y

# See https://www.kali.org/tools/kali-meta/ for meta packages you might want to install
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install kali-tools-web kali-tools-vulnerability kali-tools-exploitation

RUN apt-get clean
