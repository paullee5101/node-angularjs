#Let's Compare Main Repository

### Installation
----
```
$ sudo apt-get install mariadb-server
$ npm install
```

### Database setup
----
**Create database**
```
> CREATE DATABASE letscompare;
> CREATE USER 'letscompare'@'localhost' IDENTIFIED BY '5CgGku&?$kw$tG&9';
> GRANT SELECT, UPDATE, INSERT, DELETE ON letscompare.* to 'letscompare'@'localhost';
```


### Run
----

```
$ gulp
```
