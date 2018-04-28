/**
 * Example account management routes
 **/
'use strict';

const fetch = require('node-fetch');
const OAuth = require('oauth').OAuth;
const { Analytics }= require('../fastText-0.1.0/Analytics.js');

module.exports = (expressApp, functions) => {

  if (expressApp === null) {
    throw new Error('expressApp option must be an express server instance')
  }

  // Expose a route to return user profile if logged in with a session
  expressApp.get('/ingest/twitter/timeline', (req, res) => {
    if (req.user) {
      functions.find({id: req.user.id})
        .then(user => {
          if (!user) return res.status(500).json({error: 'Unable to fetch profile'});
          if (!user.twitter) return res.status(500).json({error: 'No linked Twitter profile'});

          let twitterOauth = new OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            process.env.TWITTER_KEY,
            process.env.TWITTER_SECRET,
            '1.0A',
            null,
            'HMAC-SHA1'
          );

          return new Promise((resolve, reject) => {
            twitterOauth.get(
              `https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=${user.twitter.id}&count=200`,
              user.twitter.accessToken, //test user token
              user.twitter.refreshToken, //test user secret
              function (e, data, res){
                if (e) reject(e);
                resolve(JSON.parse(data));
              });
          });
        })
        .then(data => data.map(v => v.text))
        .then(tweets => {
          let joinedStr = tweets.join(' ');
          let categories = Analytics.analyzeTweets(joinedStr, 3);

          res.json({
            tweets,
            categories
          });
        })
        .catch(err => {
          console.log(err);
          return res.status(500).json({error: 'Unable to fetch profile'})
        })
    } else {
      return res.status(403).json({error: 'Must be signed in to get profile'})
    }
  })

};
