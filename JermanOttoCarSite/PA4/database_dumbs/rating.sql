CREATE TABLE IF NOT EXISTS `rating` (
	`id_trim`	INTEGER,
	`API_key` varchar(32) NOT NULL,
	`car_rating` INTEGER NOT NULL,
	UNIQUE KEY `id_trim` (`id_trim`),
	FOREIGN KEY (`API_key`) REFERENCES users (`API_key`),
	FOREIGN KEY (`id_trim`) REFERENCES cars (`id_trim`)
);