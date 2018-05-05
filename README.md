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

#### Docker shell login

```shell
$ docker exec -it dockerfirebase_node_1 ash
```

#### init Firebase project

1. Please create a project with the firebase before execution.
1. Once created, enable `email / password` and` Google` from `Authentication`.
1. Next, select `Database` and enable the function in` Cloud Firestore`.
1. After that, enable `Hosting` and` Storage` items. This is all the default setting is OK.

In addition, this chapter is detailed in the following Firebase document.

[Firebase deploy](https://firebase.google.com/docs/hosting/deploying)

```shell
# cd /var/app
# firebase login
Visit this URL on any device to log in:
{{ firebase_login_url }}
```

Use a web browser to access `{{ firebase_login_url }}`.
Then log in with a registered google account on Firebase.

```shell
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

