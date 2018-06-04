<template>
<div>
  <!--Transition for showing/ hiding toaster-->
   <transition name="slide-fade">

  <div v-show="display" v-bind:class="{ toastergreen: green, toasterred: red, toasteryellow: yellow, toaster: true }">

    <img src="./assets/EmployeeNavigator.png" style="width: 250px">

    <h2 v-show="toasterTitle !== null && xMark === false && checkmark === false" class="blueText">{{title}}</h2>

    <!--Animation-->
    <div v-show="animation" style="height: 80px;" class="spinner spinner--stretch">
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-1">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-2">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-3">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-4">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-5">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-6">
      </div>
      <div v-bind:class="{ greenbricks: green, redbricks: red, yellowbricks: yellow, rect: true}" class="rect rect-7">
      </div>
    </div>

    <h4 v-show="toasterMessage !== null && xMark === false && checkmark === false" class="blueText" >{{message}}</h4>

    <div v-show="checkmark" class="success-container">
      <i class="fa fa-check fa-3x" style="display: inline-block;" v-bind:class="{redText: red, greenText: green, yellowText: yellow}"></i>
      <h2 v-show="checkMessage !== null" v-bind:class="{redText: red, blueText: green, yellowText: yellow}" style="display: inline-block;">{{successMessage}}</h2>
    </div>

    <div v-show="xMark" class="x-container">
      <i class="fa fa-times fa-3x" style="display: inline-block;" v-bind:class="{redText: red, greenText: green, yellowText: yellow}"></i>
      <h2 v-show="xMessage !== null " v-bind:class="{redText: red, blueText: green, yellowText: yellow}" style="display: inline-block;">{{failMessage}}</h2>
    </div>
  </div>
   </transition>
   <!--
   <div id="control-panel">
      <button @click="showToaster = !showToaster" >
        showToaster
      </button>
      <button @click="color = 'green'" >
        green 
      </button>
      <button @click="color = 'red'" >
        red
      </button>
      <button @click="color = 'yellow'" >
        yellow
      </button>
      <button @click="success = true" >
        success
      </button>
      <button @click="fail = true" >
         fail
      </button>
      <button @click="bricks = true" >
        bricks
      </button>
      <input v-model="title" placeholder="title">
      <input v-model="message" placeholder="message">
      <input v-model="successMessage" placeholder="successMessage">
      <input v-model="failMessage" placeholder="failMessage">

      <input v-model="timer" placeholder="timer">
   </div> -->

</div>
</template>

<script>
export default {
  data() {
    return {
      display: this.showToaster,
      displayTime: this.timer,
      animation: this.bricks,
      themeColor: this.color,
      checkmark: this.success,
      xMark: this.fail,
      checkMessage: this.successMessage,
      xMessage: this.failMessage,
      toasterTitle: this.title,
      toasterMessage: this.message
    };
  },
  props: {
    showToaster: {
      default: false,
      type: Boolean
    },
    timer: {
      default: null,
      type: Number
    },
    bricks: {
      default: true,
      type: Boolean
    },
    color: {
      default: "green",
      type: String
    },
    success: {
      default: false,
      type: Boolean
    },
    fail: {
      default: false,
      type: Boolean
    },
    title: {
      default: null,
      type: String
    },
    message: {
      default: null,
      type: String
    },
    successMessage: {
      default: null,
      type: String
    },
    failMessage: {
      default: null,
      type: String
    }
  },
  watch: {
    showToaster(newValue) {
      if (newValue !== this.display) {
        this.display = newValue;
      }
    },
    timer(newValue) {
      if (newValue !== this.displayTime) {
        this.displayTime = newValue;
      }
    },
    bricks(newValue) {
      if (newValue !== this.animation) {
        this.animation = newValue;
      }
    },
    color(newValue) {
      if (newValue !== this.themeColor) {
        this.themeColor = newValue;
      }
    },
    success(newValue) {
      if (newValue !== this.checkmark) {
        this.checkmark = newValue;
      }
    },
    fail(newValue) {
      if (newValue !== this.xMark) {
        this.xMark = newValue;
      }
    },
    successMessage(newValue) {
      if (newValue !== this.checkMessage) {
        this.checkMessage = newValue;
      }
    },
    failMessage(newValue) {
      if (newValue !== this.xMessage) {
        this.xMessage = newValue;
      }
    },
    message(newValue) {
      if (newValue !== this.toasterMessage) {
        this.toasterMessage = newValue;
      }
    },
    title(newValue) {
      if (newValue !== this.toasterTitle) {
        this.toasterTitle = newValue;
      }
    },
    timer() {
      if (!isNaN(this.timer) && this.timer > 999) {
        this.setTimer(this.timer);
      }
    },
    animation() {
      if (this.animation === true) {
        this.xMark = false;
        this.checkmark = false;

        this.$emit("update:fail", false);
        this.$emit("update:success", false);
      }
    },
    checkmark() {
      if (this.checkmark === true) {
        this.xMark = false;
        this.animation = false;

        this.$emit("update:fail", false);
        this.$emit("update:bricks", false);
      }
    },
    xMark() {
      if (this.xMark === true) {
        this.checkmark = false;
        this.animation = false;

        this.$emit("update:success", false);
        this.$emit("update:bricks", false);

      }
    }
  },
  methods: {
    setTimer(timer) {
      this.display = true;

      var self = this;
      setTimeout(function() {
        self.displayTime = null;
        self.display = false;
      }, timer);
    }
  },
  computed: {
    green() {
      if (this.color === "green") {
        return true;
      } else if (this.color !== "red" && this.color !== "yellow") {
        return true;
      } else {
        return false;
      }
    },
    red() {
      if (this.color === "red") {
        return true;
      } else {
        return false;
      }
    },
    yellow() {
      if (this.color === "yellow") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-size: 15px !important;
}
.toaster {
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border: 3px solid;
  border-radius: 5px;
  border-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-top: 10px;
  padding-bottom: 0px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.176);
  z-index: 10000;
  padding-bottom: 5px;
}

.toastergreen {
  border: 3px solid #58a94d;
  border-top: 0px;
}
.toasterred {
  border: 3px solid #d8232a;
  border-top: 0px;
}
.toasteryellow {
  border: 3px solid #ffbb1a;
  border-top: 0px;
}

.greenbricks {
  background-color: #58a94d;
}
.redbricks {
  background-color: #d8232a;
}
.yellowbricks {
  background-color: #ffbb1a;
}
.toaster-text {
  font-weight: 900;
}
.blueText {
  color: #364f6e;
  margin: 0px;
}
.yellowText {
  color: #ffbb1a;
  margin: 0px;
}
.redText {
  color: #d8232a;
  margin: 0px;
}
.greenText {
  color: #58a94d;
  margin: 0px;
}

.rect {
  color: white;
  text-align: center;
  font-size: 25px;
  padding-top: 40px;
}
.spinner {
  display: inline-block;
  text-align: center;
  font-size: 10px;
  width: 250px;
  * {
    line-height: 0;
    box-sizing: border-box;
  }
}
.rect {
  animation: sk-stretchdelay 1s ease-in-out infinite;
}
.toaster {
  animation: open 1s ease-in-out infinite;
}

.spinner > div {
  height: 80%;
  width: 8%;
  display: inline-block;
}

.spinner .rect-2 {
  animation-delay: -0.9s;
}

.spinner .rect-3 {
  animation-delay: -0.8s;
}

.spinner .rect-4 {
  animation-delay: -0.7s;
}

.spinner .rect-5 {
  animation-delay: -0.6s;
}

.spinner .rect-6 {
  animation-delay: -0.5s;
}

.spinner .rect-7 {
  animation-delay: -0.4s;
}

.spinner .rect-8 {
  animation-delay: -0.3s;
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
}

#control-panel {
  position: fixed;
  top: 500px;
  right: 40%;
  width: 250px;
  flex-wrap: wrap;
  display: flex;
}

button {
  margin: 5px;
}

input {
  margin: 5px;
}
</style>
