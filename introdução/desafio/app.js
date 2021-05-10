new Vue({
  el: "#desafio",
  data: {
    name: "Diego",
    age: 36,
    srcLink: "https://avatars.githubusercontent.com/u/36824868?v=4"
  },
  methods: {
    sumAge(){
      return this.age * 3
    },
    randomNumber(){
      return Math.random()
    }
  },
})