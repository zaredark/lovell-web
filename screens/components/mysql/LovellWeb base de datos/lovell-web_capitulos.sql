-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: lovell-web-database-zaredark-6f70.j.aivencloud.com    Database: lovell-web
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'b8bbf66a-8e80-11ef-b871-5e295ba92592:1-66';

--
-- Table structure for table `capitulos`
--

DROP TABLE IF EXISTS `capitulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `capitulos` (
  `id_capitulo` int NOT NULL AUTO_INCREMENT,
  `portada` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `contenido` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `imagenes` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `libro_ref` int NOT NULL,
  PRIMARY KEY (`id_capitulo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capitulos`
--

LOCK TABLES `capitulos` WRITE;
/*!40000 ALTER TABLE `capitulos` DISABLE KEYS */;
INSERT INTO `capitulos` VALUES (1,'https://cdn.discordapp.com/attachments/945376884722630719/1292947853605343272/Screenshot_20240929-000048_YouTube.jpg?ex=67059706&is=67044586&hm=c010f60b8df77ce218babf46dbae4b6a9a88da370009071f5d2ec8045c2ecd0c&','lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus lorem ipsus ','https://cdn.discordapp.com/attachments/945376884722630719/1292947853605343272/Screenshot_20240929-000048_YouTube.jpg?ex=67059706&is=67044586&hm=c010f60b8df77ce218babf46dbae4b6a9a88da370009071f5d2ec8045c2ecd0c&',1);
/*!40000 ALTER TABLE `capitulos` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-01 14:06:42
