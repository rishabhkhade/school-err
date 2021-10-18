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
sequelize-cli db:seed --seed 20210926065028-demo-user

24. For creating Controller file run command from root of folder
touch controllers/CountryController.js (on ubuntu)
touch controllers/PlanController.js (on windows)

25. For access key and refresh key generate:
 node
 require('crypto').randomBytes(64).toString('hex')

