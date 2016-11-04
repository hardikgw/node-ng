FROM ubuntu:16.04
MAINTAINER hardikgw@gmail.com
ENV\
	ENV=development
RUN\
	apt-get update &&\
	apt-get install -y vim curl wget sudo default-jdk lsof git ntp &&\
	apt-get update &&\
	apt-get clean
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
EXPOSE 3000