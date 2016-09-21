-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 18, 2016 at 06:50 AM
-- Server version: 5.5.49-MariaDB-1ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `letscompare`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` char(25) NOT NULL,
  `parent_id` char(25) NOT NULL,
  `taxonomy` enum('Policies','Companies','Comparison metrics') DEFAULT NULL,
  `category_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `company_id` char(25) NOT NULL,
  `owner` char(25) NOT NULL,
  `created` datetime NOT NULL,
  `active` enum('y','n') NOT NULL DEFAULT 'y',
  `category_id` char(25) NOT NULL,
  `logo` varchar(40) DEFAULT NULL,
  `company_name` varchar(100) NOT NULL,
  `est_year` char(4) DEFAULT NULL,
  `mailing_address` varchar(100) DEFAULT NULL,
  `billing_address` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `policies_sold_qty` int(6) DEFAULT NULL,
  `profile` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `file_id` char(25) NOT NULL,
  `parent_id` char(25) NOT NULL,
  `filename` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `policy_id` char(25) NOT NULL,
  `owner` char(25) NOT NULL,
  `created` datetime NOT NULL,
  `active` enum('y','n') NOT NULL DEFAULT 'y',
  `company_id` char(25) NOT NULL,
  `category_id` char(25) NOT NULL,
  `policy_details` text,
  `legal_details` text,
  `terms` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `policy_items`
--

CREATE TABLE `policy_items` (
  `item_id` char(25) NOT NULL,
  `policy_id` char(25) NOT NULL,
  `policy_name` varchar(50) NOT NULL,
  `policy_value` varchar(50) NOT NULL,
  `terms` text,
  `coverage` text,
  `not_covered` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `price_comparisons`
--

CREATE TABLE `price_comparisons` (
  `category_id` char(25) NOT NULL,
  `product_id` char(25) NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `quote_id` char(25) NOT NULL,
  `owner` char(25) NOT NULL,
  `created` datetime NOT NULL,
  `policy_id` char(25) NOT NULL,
  `price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` char(25) NOT NULL,
  `role_name` varchar(20) NOT NULL,
  `permissions` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` char(25) NOT NULL,
  `owner` char(25) NOT NULL DEFAULT 'Self',
  `created` datetime NOT NULL,
  `active` enum('y','n') NOT NULL DEFAULT 'y',
  `role_id` char(25) NOT NULL,
  `company_id` char(25) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `secret` varchar(160) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `gender` enum('Female','Male') DEFAULT NULL,
  `dob` char(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);
ALTER TABLE `companies` ADD FULLTEXT KEY `ft_idx` (`company_name`,`mailing_address`,`billing_address`,`email`,`phone`,`fax`,`profile`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`file_id`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`policy_id`);
ALTER TABLE `policies` ADD FULLTEXT KEY `ft_idx` (`policy_details`,`legal_details`,`terms`);

--
-- Indexes for table `policy_items`
--
ALTER TABLE `policy_items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`quote_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);
ALTER TABLE `users` ADD FULLTEXT KEY `ft_idx` (`email`,`full_name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
