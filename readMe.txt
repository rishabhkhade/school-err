1. mkdir projectname

2. npm init

3. package.json file config

4. npm i @hapi/joi bcryptjs body-parser morgan dotenv express cors jsonwebtoken mysql2 sequelize --save

5. npm install babel-preset-env --save-dev

6. npm install babel-cli --save

7. npm install babel-core --save

8. create .babelrc file

9. npm install --save-dev babel-plugin-transform-es2015-destructuring

10. npm install --save-dev babel-plugin-transform-object-rest-spread

11. npm install nodemon -g

12. npm install sequelize-cli -g

13. npx sequelize-cli init (For creating basic model configuration)

14. create .env file

15. create app.js file

16. create routes folder and api file

17. npm start

18. For creating model and migration both at a time
npx sequelize-cli model:generate --name SecurityType --attributes name:string

19. For creating migration table
sequelize migration:create --name create_users_table

20. For running migration
sequelize db:migrate

21. For undo all migration
sequelize db:migrate:undo:all

22. seeder creation
sequelize seed:generate --name demo-cancellation_reason

23. all seeder run
sequelize db:seed:all
--For single seeder run
sequelize-cli db:seed --seed 20210722100209-demo-customer

24. For creating Controller file run command from root of folder
touch controllers/CountryController.js (on ubuntu)
type nul > controllers/CountryController.js (on windows)

25. For access key and refresh key generate:
 node
 require(crypto').randomBytes(64).toString('hex')

 26.For ativate PM2 process on server
    sudo killall node
    sudo pm2 list
    sudo pm2 start npm --name "awraaq" -- start

27. Remove ONLY_FULL_GROUP_BY from mysql console

    sudo mysql -u admin -p
    Password : awraaq@321

    mysql > SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));

28. For Cron Job mysql queries to run on server

crontab -e

UPDATE `orders` SET `status`='Cancel' WHERE `order_expiry` < CURRENT_TIME AND `status` != 'Completed';
UPDATE orders O INNER JOIN offers OF ON O.id = OF.order_id SET OF.status='Cancel' WHERE O.order_expiry < CURRENT_TIME AND OF.status != 'Completed';
UPDATE orders O INNER JOIN negotiationrooms N ON O.id = N.order_id SET N.status='Cancelled' WHERE O.order_expiry < CURRENT_TIME AND N.status != 'Completed';

#!/bin/bash
/usr/bin/mysql mysql --user=admin --password=awraaq@321 --execute="UPDATE awraaq.orders SET awraaq.orders.status='Expired' WHERE awraaq.orders.order_expiry < CURRENT_TIME AND awraaq.orders.status != 'Completed' AND awraaq.orders.status != 'Working' AND awraaq.orders.status != 'Cancel';" 
/usr/bin/mysql mysql --user=admin --password=awraaq@321 --execute="UPDATE awraaq.orders O INNER JOIN awraaq.offers OF ON O.id = OF.order_id SET OF.status='Expired' WHERE O.order_expiry < CURRENT_TIME AND OF.status != 'Completed' AND OF.status != 'Working' AND OF.status != 'Cancel';"
#/usr/bin/mysql mysql --user=admin --password=awraaq@321 --execute="UPDATE awraaq.orders O INNER JOIN awraaq.negotiationrooms N ON O.id = N.order_id SET N.status='Cancelled' WHERE O.order_expiry < CURRENT_TIME AND N.status != 'Completed';"

#!/bin/bash
/usr/bin/mysql mysql --user=admin --password=awraaq@321 --execute="UPDATE awraaq.orders SET awraaq.orders.status='Expired' WHERE awraaq.orders.order_expiry < CURRENT_TIME AND awraaq.orders.status != 'Completed' AND awraaq.orders.status != 'Cancel';" 
/usr/bin/mysql mysql --user=admin --password=awraaq@321 --execute="UPDATE awraaq.orders O INNER JOIN awraaq.offers OF ON O.id = OF.order_id SET OF.status='Expired' WHERE O.order_expiry < CURRENT_TIME AND OF.status != 'Completed' AND OF.status != 'Cancel';"
/usr/bin/mysql mysql --user=admin --password=awraaq@321 --execute="UPDATE awraaq.orders O INNER JOIN awraaq.negotiationrooms N ON O.id = N.order_id SET N.status='Cancelled' WHERE O.order_expiry < CURRENT_TIME AND N.status != 'Completed';"


29. phpmyadmin for server when you will empty html folder, you need to run below command to get phpmyadmin
sudo ln -s  /usr/share/phpmyadmin /var/www/html/phpmyadmin

30. .env stop to track
git rm .env --cached
git commit -m "Stopped tracking .env File" 



To set IST, run this in MySQL Server
SET GLOBAL time_zone = '+5:30';
To check current time in MySQL Server
SELECT now();