import Vue from 'vue'; // package.js에서 vue를 가져옴
import TicTacToc from './TicTacToc' // 얘는 js가 아니라서 rules 설정해야함
// nodeㅜ 환경은 require, vue환경운 import from
// webpack에 extenstions에 vue가 추가되서 numberbaseball 로 
new Vue(TicTacToc).$mount('#root')