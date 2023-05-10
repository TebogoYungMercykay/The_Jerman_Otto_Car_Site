CREATE TABLE IF NOT EXISTS `preferences` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`API_key` varchar(32) NOT NULL,
	`theme`	varchar(6),
	`make`	varchar(255),
	`engine_type`	varchar(255),
	`transmission`	varchar(255),
	`body_type`	varchar(255),
	PRIMARY KEY (`id`),
	FOREIGN KEY (`API_key`) REFERENCES users (`API_key`),
  	UNIQUE KEY `api_key` (`API_key`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;