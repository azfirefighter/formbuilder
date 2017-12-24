SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `formbuilder`
--
CREATE DATABASE formbuilder;
USE formbuilder;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--
CREATE TABLE `forms` (
  `id` int(10) NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`),
  `name` varchar(255) NOT NULL,
  `structure` text NOT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL
) ENGINE=InnoDB;