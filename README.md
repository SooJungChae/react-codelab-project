<<<<<<< HEAD
# CodeLab-React-Fundamentals

## About

React 기본 작업 환경
- babel 을 통한 ES6 변환
- webpack-dev-server 사용
- react-hot-loader 를 통한 Hot Module Reload 사용

React CodeLab 에서 작업환경 설정을 할 때 사용 된 코드 입니다.


## 설치하기

```sh
git@github.com:velopert/react-codelab-fundamentals.git
npm install -g webpack webpack-dev-server
npm install
# npm install 과정이 오래 걸린다면, 다음과 같이 node_modules.zip 을 다운로드 받아서 압축을 해제하세요:
wget https://github.com/velopert/react-codelab-fundamentals/releases/download/1.0/node_modules.zip
unzip node_modules.zip -d node_modules
```

## 실행하기

```
npm run dev-server
```

서버는 포트 8081 으로 실행됩니다. 변경은 webpack.config.js 에서 할 수 있습니다.
=======
# React-Codelab-Project

## About

React-Codelab-Project is a Single-page infinite-scrolling public memo app implemented using React.js, Redux, Express.js and MongoDB.

## Features
- Authentication (Sign Up / Sign In)
- Memo Creation / Manipulation (edit, delete, star)
- User Search

Preview: https://memo.vlpt.us/

## Following technologies are used
- axios
- babel
- express
- bcryptjs
- mongoose
- react
- react-router
- react-addons-css-transition-group
- react-addons-update
- redux
- redux-thunk
- materializecss
- react-hot-loader
- webpack
- webpack-dev-server
- style-loader
- css-loader


## Prerequisites
MongoDB and NodeJS should be installed

```
npm install -g webpack babel nodemon cross-env
npm install
```

## Scripts

- `npm run clean` Deletes Build files of Server and Client
- `npm run build` Builds Server and Client
- `npm run start` Start server in production environment
- `npm run development` Start server in development environment

Express server runs on port 3000, and development server runs on port 4000.

Tutorial on this project (in Korean): https://velopert.com/tag/reactcodelab
>>>>>>> master
