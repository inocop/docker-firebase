# docker-firebase

## Project setup

```
$ docker exec -it dockerfirebase_node_1 ash
$ cd /var/app
$ firebase login
$ firebase init
> ◯ Database: Deploy Firebase Realtime Database Rules
> ● Firestore: Deploy rules and create indexes for Firestore
> ● Functions: Configure and deploy Cloud Functions
> ● Hosting: Configure and deploy Firebase Hosting sites
> ◯ Storage: Deploy Cloud Storage security rules

> ? What do you want to use as your public directory? [sample-chat]

$ cd sample-chat
$ vue init nuxt-community/starter-template
```

## Debug run
```
$ firebase serve -p 5000 -o 0.0.0.0
```

