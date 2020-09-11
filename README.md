### About: 
App : React js 
      Boostrap 4
      Nodejs 
Lab:  Views and router server

### Content

# render data
# component
# props / state
# post get delete update data in mysql
# filter data using form


## git command

responstory đã tồn tại:
```
 git remote add origin https://github.com/pqthinh/my-react-app.git

 git push -u origin master
```
nếu chưa có:
```
 git init:  tạo git commit
 git add readme.md : tạo file 
 git commit -m "push project"  : commit
 git remote add origin https://github.com/pqthinh/my-react-app.git
 git push -u origin master
```

### Script in forder my-react-app

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

```
npm install -–save concurrently axios express mysql
```
### run server and client using concurrently
*step1 : install concurrently
 ```
 npm install --save concurrently
 ```
*last: 

```
"scripts": {
    "server": "node app",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server \" \"npm run client \" "
  },
```


### temp : client list customer 

```
<div>Name: {this.state.customer.name} </div>
<div>Phone: {this.state.customer.phone} </div>
<div>Status: {this.state.customer.status} </div>
<div>Email: {this.state.customer.email} </div>
<div> Address: {this.state.customer.address} </div>
```

### Sử dụng phương thức post, truyền dữ lieeu qua body-request  `body-parser`

```
npm install body-parser
```

### download router-react-dom for client
`npm install --save react-router-dom`

### build app
in root: `npm install`

in client: `cd ./client`  /  `npm install`

run app: `npm run dev`

### Loi client khi web-pack-dev #v 3.10.1
`b1: Uninstall node_modules`
`Remove package-lock`
`b2 : npm install `

# `git push --force origin master`

=============================== END OF PROJECT REACT JS ============================================
