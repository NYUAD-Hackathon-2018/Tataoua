exports.Analytics =  class Analytics{
  static analyzeTweets(tweet, numberOfOutputs){
    var child = require('child_process').spawnSync('./fasttext', ['predict', 'model_output2.bin', '-', numberOfOutputs.toString()], {input: tweet+"\n", cwd: __dirname});
    return child.stdout.toString().replace("\n","").replace(new RegExp("__label__", 'g'), "").split(" ");
  }
}


