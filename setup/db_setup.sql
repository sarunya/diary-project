

CREATE TABLE `diary_db`.`user` (`id` varchar(255) NOT NULL,
`user_id` varchar(255) NOT NULL DEFAULT 'NULL',
`password` varchar(255) NOT NULL DEFAULT 'NULL',
`name` varchar(255) NOT NULL, 
PRIMARY KEY (id));


CREATE TABLE `diary_db`.`diary` (`id` varchar(255) NOT NULL,
`user_id` varchar(255) NOT NULL DEFAULT 'NULL',
`data` varchar(255) NOT NULL DEFAULT 'NULL',
`created_date` varchar(255) NOT NULL,
`modified_date` varchar(255) NOT NULL, 
PRIMARY KEY (id));