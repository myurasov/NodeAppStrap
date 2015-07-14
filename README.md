# NodeServerStart

Starter project for node-based web service

Featuring

👻 Gulp Commands   

👾 App structure w/config/json handling/routing

🐼 Remote deployment


## Development

```
npm install
gulp
```

Server is automatically restarted whenever any source files are changed.

## Deployment to Remote Server

* Create an RSA keypair
* Place __production-remote.id_rsa__ in __dev/scripts/__
* Add corresponding __*.id_rsa.pub__ file to the list of authorized keys
* Install __forever__ on the server: `npm -g install forever`
* Run `gulp build:production && dev/scripts/deploy-production.sh`
* Enjoy!

## License

Well, it's [WTFPL](http://www.wtfpl.net/) basically.