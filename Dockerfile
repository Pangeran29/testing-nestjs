FROM debian:bullseye as builder

ARG NODE_VERSION=18.13.0
ARG YARN_VERSION=8.19.3

RUN apt-get update; apt install -y curl python-is-python3 pkg-config build-essential
RUN curl https://get.volta.sh | bash
ENV VOLTA_HOME /root/.volta
ENV PATH /root/.volta/bin:$PATH
RUN volta install node@${NODE_VERSION} npm@${YARN_VERSION}

#######################################################################

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install
FROM debian:bullseye

COPY --from=builder /root/.volta /root/.volta
COPY --from=builder /app /app

WORKDIR /app
ENV PATH /root/.volta/bin:$PATH

CMD [ "npm", "run", "start" ]

EXPOSE 3003