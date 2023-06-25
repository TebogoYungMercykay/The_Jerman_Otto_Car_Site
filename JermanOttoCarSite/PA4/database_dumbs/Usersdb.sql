BEGIN
-- Selepe Sello uXXXXXXXX
-- Users Database
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(129) NOT NULL,
  `API_key` varchar(32) NOT NULL,
  `salt` int(12) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `api_key` (`API_key`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES

(1, 'Test', 'User', 'testuser@tuks.co.za', 'MjAyNjM2ODk3Njc0N2NmYWY3NzI4YjgxYzM0ODk4NTcwMGJkMGNmMTJj', 'BDy}w#H_nvM-Q9-r&r3S', 2026368976),
(2, 'John', 'Doe', 'johndoe3@gmail.com', 'MjEzNjY5MjE4OGYwZjAwMjY3ZWViZmYwNDNkNDBhYWIwMmNlOGQwNjEw', '9le[8=C[A0J}4>vmu]K"', 2136692188);

UNLOCK TABLES;
COMMIT