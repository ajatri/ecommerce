#!/bin/sh
cd backend && npm i && cd ..
cd frontend && npm i && cd ..
node backend &
cd frontend && npm start
