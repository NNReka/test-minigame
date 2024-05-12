<template>
<div>
  <div class="game-tools">
          <router-link to="/" class="game-tool" >回到主页</router-link>
          <router-link to="/help" class="game-tool" >游戏规则</router-link>
          <router-link to="/new"class="game-tool">新建游戏</router-link>
  </div>
  <router-view></router-view>
</div>

</template>

<style>
.game-tools {
    margin-top: 20px;
    text-align: center;
  }
  
  .game-tool {
    padding: 5px 10px;
    margin-right: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
  }
</style>