CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `name` varchar(255),
  `password` varchar(255),
  `picture` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `user_item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `item_id` int,
  `count` int,
  `name` varchar(255),
  `price` float,
  `about` varchar(255),
  `picture` varchar(255)
);


ALTER TABLE `user_item` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

