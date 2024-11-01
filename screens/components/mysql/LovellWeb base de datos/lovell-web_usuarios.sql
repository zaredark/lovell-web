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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(32) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `nickname` varchar(45) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `bio` varchar(100) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `password` varchar(45) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `icon_user` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `banner_user` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `Autor_idx` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'zaredark','ZareDark','Maquina maquiavelica del maaaaaaaaalllll.....','ciberprueba@gmail.com','prueba123','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/inge1.jpg?alt=media&token=7f48b351-1cef-4746-8bcb-9cf9af7c3481','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/banner.jpg?alt=media&token=d7e6a50d-4ba4-40dd-b826-bb797d68d248'),(2,'MonitodelMal0090','Monito del Infierno','Lo unico que diré es que me gusta BNHA.','monoprueba@gmail.com','monito1234','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/image-example.png?alt=media&token=737f5e0e-ba01-474b-9fc3-833aa2502ad7','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/quien-es-el-mas-inteligente-de-bnha-2.webp?alt=media&token=d3112e24-34bc-4267-aec5-2212f3d59e32');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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

-- Dump completed on 2024-11-01 14:06:33
