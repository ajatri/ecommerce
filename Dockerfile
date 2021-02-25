FROM node:alpine
COPY backend backend
COPY frontend frontend
ENTRYPOINT ["./run.sh"]