CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `name` varchar(255),
  `password` varchar(255),
  `picture` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `count` varchar(255),
  `name` varchar(255),
  `price` float,
  `desc` varchar(255),
  `picture` varchar(255)
);

CREATE TABLE `user_item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `item_id` int,
  `count` int
);

ALTER TABLE `user_item` ADD FOREIGN KEY (`item_id`) REFERENCES `products` (`id`);

ALTER TABLE `user_item` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

