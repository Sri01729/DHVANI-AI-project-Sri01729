-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 03, 2024 at 06:44 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Dhvani`
--

-- --------------------------------------------------------

--
-- Table structure for table `angry_songs`
--

CREATE TABLE `angry_songs` (
  `id` int(11) NOT NULL DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `angry_songs`
--

INSERT INTO `angry_songs` (`id`, `title`, `artist`, `album`, `genre`, `path`) VALUES
(1, 'Snowflake', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Snowflake_Dance.mp3'),
(2, 'Night\'s_Delight', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Summer_Night\'s_Delight.mp3'),
(3, 'Wonderland', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Summer_Wonderland.mp3'),
(4, 'Sunshine', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Sunshine_in_My_Soul.mp3'),
(5, 'Smile', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Sunshine_Smile.mp3'),
(6, 'Winter', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Winter_Wonderland.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `calm_songs`
--

CREATE TABLE `calm_songs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `calm_songs`
--

INSERT INTO `calm_songs` (`id`, `title`, `artist`, `album`, `genre`, `path`) VALUES
(1, 'Reverie', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Tranquil Reverie.mp3'),
(2, 'Melodies', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Tranquil Melodies.mp3'),
(3, 'Echoes', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Whispering Echoes.mp3'),
(4, 'Shadows', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Whispering Shadows.mp3'),
(5, 'Tranquility', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Whispers of Tranquility.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `energetic_songs`
--

CREATE TABLE `energetic_songs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `happy_songs`
--

CREATE TABLE `happy_songs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `happy_songs`
--

INSERT INTO `happy_songs` (`id`, `title`, `artist`, `album`, `genre`, `path`) VALUES
(1, 'Snowflake', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Snowflake_Dance.mp3'),
(2, 'Delight', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Summer_Night\'s_Delight.mp3'),
(3, 'Wonderland', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Summer_Wonderland.mp3'),
(4, 'Sunshine', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Sunshine_in_My_Soul.mp3'),
(5, 'Smile', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Sunshine_Smile.mp3'),
(6, 'Winter', 'sai', NULL, 'Happy', '/DHVANI/assets/audio/happy/Winter_Wonderland.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `MusicLocationInfo`
--

CREATE TABLE `MusicLocationInfo` (
  `id` int(11) NOT NULL,
  `LocationName` varchar(255) NOT NULL,
  `BandName` varchar(255) DEFAULT NULL,
  `SongName` varchar(255) DEFAULT NULL,
  `Artists` varchar(255) DEFAULT NULL,
  `Path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `MusicLocationInfo`
--

INSERT INTO `MusicLocationInfo` (`id`, `LocationName`, `BandName`, `SongName`, `Artists`, `Path`) VALUES
(1, 'Courtenay', 'No band name, a solo performer', 'Uh huh', 'ian steeksma', '/DHVANI/assets/audio/courtenay/54137.mp3'),
(2, 'Courtenay', 'No band name', 'One last time', 'Ian steeksma', '/DHVANI/assets/audio/courtenay/54138.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `sad_songs`
--

CREATE TABLE `sad_songs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sad_songs`
--

INSERT INTO `sad_songs` (`id`, `title`, `artist`, `album`, `genre`, `path`) VALUES
(1, 'Echoes', 'sai', NULL, 'sad', '/DHVANI/assets/audio/sad/Echoes of the Rain.mp3'),
(2, 'Serenade', 'sai', NULL, 'sad', '/DHVANI/assets/audio/sad/Raindrop Serenade.mp3'),
(3, 'Blues', 'sai', NULL, 'sad', '/DHVANI/assets/audio/sad/Rainy Day Blues.mp3'),
(4, 'Reflections', 'sai', NULL, 'sad', '/DHVANI/assets/audio/sad/Rainy Day Reflections.mp3'),
(5, 'Rainy Day', 'sai', NULL, 'sad', '/DHVANI/assets/audio/sad/Rainy Day Serenade.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `surprise_songs`
--

CREATE TABLE `surprise_songs` (
  `id` int(11) NOT NULL DEFAULT 0,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) DEFAULT NULL,
  `album` varchar(255) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `surprise_songs`
--

INSERT INTO `surprise_songs` (`id`, `title`, `artist`, `album`, `genre`, `path`) VALUES
(1, 'Reverie', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Tranquil Reverie.mp3'),
(2, 'Melodies', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Tranquil Melodies.mp3'),
(3, 'Echoes', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Whispering Echoes.mp3'),
(4, 'Shadows', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Whispering Shadows.mp3'),
(5, 'Tranquility', 'Sai', NULL, 'Calm', '/DHVANI/assets/audio/calm/Whispers of Tranquility.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `email`, `password`) VALUES
('josmi', 'josmijose100@gmail.com', 'josmi'),
(' Meet', 'meet@gmail.com', 'Meet@1234'),
('Priya', 'priya@email.com', 'priya123'),
('Priya', 'priya@gmail.com', 'Priya'),
('sai', 'sai1@gmail.com', 'sai'),
('sai2', 'sai7@gmail.com', 'sai7'),
('sai', 'saialahariedu@gmail.com', 'sai'),
('sri', 'sri@gmail.com', 'sri'),
('test', 'test@gmail.com', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calm_songs`
--
ALTER TABLE `calm_songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `energetic_songs`
--
ALTER TABLE `energetic_songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `happy_songs`
--
ALTER TABLE `happy_songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `MusicLocationInfo`
--
ALTER TABLE `MusicLocationInfo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UC_MusicLocationInfo` (`LocationName`,`BandName`,`SongName`,`Artists`) USING HASH;

--
-- Indexes for table `sad_songs`
--
ALTER TABLE `sad_songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calm_songs`
--
ALTER TABLE `calm_songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `energetic_songs`
--
ALTER TABLE `energetic_songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `happy_songs`
--
ALTER TABLE `happy_songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sad_songs`
--
ALTER TABLE `sad_songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
