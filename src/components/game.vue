<template>
  <div class="game-container">
    <div v-if="!gameOver">
      <p class="game-title">猜吧</p>
      <p class="game-instruction">{{ now_range }}</p>
      <input v-model.number="userGuess" type="number" class="game-input" :disabled="gameOver"  />
      <button @click="checkGuess" class="game-button" :disabled="gameOver">我猜是...</button>
      <p class="game-result" v-if="showResult">{{ resultMessage }}</p>
      <div class="game-tools">
        <button @click="saytruth" class="game-tool" v-if="attitude">拳头硬了</button>
        <button @click="reducerange" class="game-tool">直接上脚</button>
        <button @click="givemoney" class="game-tool" v-if="attitude">给钱办事</button>
      </div>
      <p v-if="attempts < maxAttempts" class="game-attempts">你还剩{{ maxAttempts - attempts }}次机会</p>
    </div>
    <p class="game-message" v-if="gameOver">{{ gameOverMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now_range: "1-100",
      targetNumber: null,
      userGuess: null,
      showResult: false,
      resultMessage: '',
      gameRange: { min: 1, max: 100 },
      maxAttempts: 10,
      attempts: 0,
      gameOver: false,
      isLying: 0,
      attitude: true
    };
  },
  mounted() {
    this.targetNumber = this.generateRandomNumber();
    console.log(this.targetNumber)
  },
  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * (this.gameRange.max - this.gameRange.min + 1)) + this.gameRange.min;
    },
    checkGuess() {
      if (this.userGuess === this.targetNumber) {
        this.gameOverMessage = '高：这怎么会！你居然猜到了';
        this.gameOver = true;
        return false;
      } else if (this.userGuess < this.targetNumber) {
        if (this.isLying!=0) {
          this.resultMessage = '高：小了';
          console.log("这是真话")
        } else {
          this.resultMessage = '高：大了';
          console.log("这是假话")
        }
      } else {
        if (this.isLying!=0) {
          this.resultMessage = '高：大了';
          console.log("这是真话")
        } else {
          this.resultMessage = '高：小了';
          console.log("这是假话")
        }
      }
      this.showResult = true;
      this.attempts++;
      if (this.attempts >= this.maxAttempts) {
        this.gameOver = true;
        this.gameOverMessage = '高：哈哈，你果然猜不到 ' + this.targetNumber + '.';
      }
      if (this.isLying!=0) {
        this.isLying--;
      }else {
        this.isLying = Math.ceil(Math.random() * 3 -1)
      }
    },
    saytruth() {
      if (this.attempts >= this.maxAttempts-1) {
        this.gameOver = true;
        this.gameOverMessage = '高：哈哈，你果然猜不到 ' + this.targetNumber + '.';
        return false;
      }
      this.isLying = 2;
      this.resultMessage = '高：好吧，接下来我将说两句实话';
      this.showResult = true;
      this.attempts++;
    },
    reducerange() {
      if (this.attempts >= this.maxAttempts-1) {
        this.gameOver = true;
        this.gameOverMessage = '高：哈哈，你果然猜不到 ' + this.targetNumber + '.';
        return false;
      }
      const rangeReduction = Math.floor((this.gameRange.max - this.gameRange.min) / 10);
      this.gameRange.max -=  Math.floor((this.gameRange.max-this.targetNumber)*0.2);
      this.gameRange.min += Math.floor((-this.gameRange.min+this.targetNumber)*0.2);
      this.now_range = this.gameRange.min + "-" + this.gameRange.max;
      this.resultMessage = '高：你算是欺负到软柿子了！';
      this.showResult = true;
      this.attempts++;
    },
    givemoney() {
      this.attitude = false;
      this.attempts -= 5;
      //this.isLying = 3;
      this.resultMessage = '高：下不为例昂';
      this.showResult = true;
    }
  }
}
</script>
