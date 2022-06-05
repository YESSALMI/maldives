import { Injectable } from '@nestjs/common';

const webpush = require('web-push');





const vapidKeys = {
  publicKey: 'BEOt9LLV_ms2VJakExSHkx8k5fynSslVS-dxvuEOHLRhtdQd7rGIvQ8B1OI9wCkyVu_dOIOgGN7MCFMLidDeIAU',
  privateKey: 'xoDv4-OX9UxhYP6SDibAZMuiutzLhm7SsHqE89BClG0'
};

// get client subscription config from db
const subscription ={"endpoint":"https://wns2-par02p.notify.windows.com/w/?token=BQYAAABdO%2fwdVpQhScCjiM%2fojXQItpv6kc%2bYfDJg6mmr5Pp1cvx2xIRVhhZfsRWmYo6CaJ1ZBKW3QEQ%2brz4WHgaX1%2fSqjpviR%2f6HC6CcUegMbY3Owqk1KElPLufM%2bysHIbLTACp%2fz2eSnzw24iqQ5eUQN80XqdtMlychohy5e4BQ0kekVqQgtXXluE%2bP4hit%2bYO0re2wkN282iGEAxI%2bRIX6jdOymHtH8SefqFSE2ppYb%2b412kCTcPlj5vJBTmL%2fL%2biXBSHJ2YIgw81hiQ1bQtE0DIIzXbFcHWWby0QgbskuPVasXeeLygcDrK34ZH0zupjKnY4%3d","expirationTime":null,"keys":{"p256dh":"BMV70kf4HW091jNAr8zwvS5LYloj3GvJ1fdHuXceJ4Ht5_mvqlF37Ss6f5HvQkk7dKYPIiRAme8A4eBmfr79guw","auth":"lF0DIURhzO8mfRoKoVM_Mw"}};
const payload = {
  notification: {
    title: 'Title',
    body: 'This is my body',
    icon: 'assets/icons/icon-384x384.png',
    actions: [
      { action: 'bar', title: 'Focus last' },
      { action: 'baz', title: 'Navigate last' },
    ],
    data: {
      onActionClick: {
        default: { operation: 'openWindow' },
        bar: {
          operation: 'focusLastFocusedOrOpen',
          url: '/signin',
        },
        baz: {
          operation: 'navigateLastFocusedOrOpen',
          url: '/signin',
        },
      },
    },
  },
};

const options = {
  vapidDetails: {
    subject: 'mailto:tifyspo716@gmail.com',
    publicKey: vapidKeys.publicKey,
    privateKey: vapidKeys.privateKey,
  },
  TTL: 60,
};

// send notification
webpush.sendNotification(subscription, JSON.stringify(payload), options)
  .then((_) => {
    console.log('SENT!!!');
    console.log(_);
  })
  .catch((_) => {
    console.log(_);
  });











































// const webpush = require('web-push');
// webpush.setGCMAPIKey('AIzaSyBGvywnhDgl3mnUjM7qgtFWEUNTLcIFC8o');
// const vapidKeys = {
//   "publicKey": "BEOt9LLV_ms2VJakExSHkx8k5fynSslVS-dxvuEOHLRhtdQd7rGIvQ8B1OI9wCkyVu_dOIOgGN7MCFMLidDeIAU",
//   "privateKey": "xoDv4-OX9UxhYP6SDibAZMuiutzLhm7SsHqE89BClG0"
// }

// webpush.setVapidDetails(
//   'mailto:essalmiy06@gmail.com',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// const payload = "hello";

// const options = {
//   gcmAPIKey: 'AIzaSyBGvywnhDgl3mnUjM7qgtFWEUNTLcIFC8o',
//   vapidDetails: {
//     subject: 'mailto:essalmiy06@gmail.com',
//     publicKey: 'BEOt9LLV_ms2VJakExSHkx8k5fynSslVS-dxvuEOHLRhtdQd7rGIvQ8B1OI9wCkyVu_dOIOgGN7MCFMLidDeIAU',
//     privateKey: 'xoDv4-OX9UxhYP6SDibAZMuiutzLhm7SsHqE89BClG0',
//   },
//   headers: {
//     'push': 'bonjour'
//   }
// }



// const pushSubscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/dL3DnLxa4nA:APA91bHpCsoMaAcQ0_VLwmV-Fh5hG01g5x08y25Fh664HaSgzAMRC1hva3ZlM8XcRXoeYcGpHBHdDbUoeDwa3RvbKDHhDEJhvdoZJXlQga3VhZ_F2Y-g-gzU-LHgHTOGs664dPs9H5uf", "expirationTime": null, "keys": { "p256dh": "BKjXtek39H9Mqns80lagNyKM3zRulENnp0U4L-adMFJqTCNJWYj2268YKwLTTWIyUffl044kw1MLRo6_U9FsdvM", "auth": "zRFWF27ShYPSv-TfDVIEUg" } };
// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');


// webpush.sendNotification(
//   pushSubscription,
//   payload,
//   options
// );









@Injectable()
export class AppService {

}
