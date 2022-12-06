FROM mcr.microsoft.com/playwright:v1.28.0-focal

RUN mkdir /workdir

WORKDIR /workdir

COPY . /workdir/

RUN npx playwright install

RUN npm install 

CMD ["npm", "run", "test"]

