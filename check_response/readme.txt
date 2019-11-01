npm i webpack webpack-cli -D
> 개발 할때만 웹팩 사용

웹팩킹 :module.exports 에서 사용된 애들을 모아서
> 스크립트가 많으니까 이걸 하나로 합치기 위해서 사용

entry:{
    app:'./main.js'
},
> 수많은 스크립트 중 가장 대표가 되는 파일, main.js, app은 하나로 합쳐진 파일의 이름
module:{
    rules:[{

    }]
},
> 웹팩의 핵심, 
> rules : 어떻게 합칠지 
plugins:[],
output:{
    filename:'[name].js',
    path:'./dist',
},
> app.js 로 해도 됨
> path에 최종 결과물이 나올꺼임
> src = "/dist/app.js" 이런 형태로