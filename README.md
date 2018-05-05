# docker-firebase

Vue.js chat sample using firebase

## Project Setup

### Docker Setup

```shell
$ git clone git@github.com:inocop/docker-firebase.git
$ cd docker-firebase
$ docker-compose up -d
```

### Firebase Setup

```shell
$ docker exec -it dockerfirebase_node_1 ash
```

```shell
# cd /var/app
# firebase login
# firebase init
> ◯ Database: Deploy Firebase Realtime Database Rules
> ● Firestore: Deploy rules and create indexes for Firestore
> ● Functions: Configure and deploy Cloud Functions
> ● Hosting: Configure and deploy Firebase Hosting sites
> ◯ Storage: Deploy Cloud Storage security rules

> ? What do you want to use as your public directory? [sample-chat]

# cd sample-chat
# vue init nuxt-community/starter-template
# npm install 
```

## Debug run

```shell
# cd /var/app/sample-chat
# npm run dev

# firebase serve -p 5000 -o 0.0.0.0 --only functions 
```

http://localhost:5000


## Deploy

```shell
# cd /var/app
# firebase deploy
```

