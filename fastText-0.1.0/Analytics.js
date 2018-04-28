exports.Analytics =  class Analytics{
  constructor(){
    const {spawn} = require('child_process').spawnSync;
  }
  static analyzeTweets(tweet, numberOfOutputs){
    var child = require('child_process').spawnSync('./fasttext', ['predict', 'model_train.bin', '-', numberOfOutputs.toString()], {input: tweet+"\n"});
    return child.stdout.toString().replace("\n","").replace(new RegExp("__label__", 'g'), "").split(" ");
  }
}

console.log(exports.Analytics.analyzeTweets("Hello", 2))
