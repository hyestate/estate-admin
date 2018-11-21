# estate-server
server

#数据库初始化
create database estate;
GRANT ALL PRIVILEGES ON estate.* TO 'estate'@'%' IDENTIFIED BY 'estate_passwd';
