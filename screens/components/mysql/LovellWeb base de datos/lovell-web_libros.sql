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
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `id_libro` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `autor` int NOT NULL,
  `sipnosis` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `cant_capitulos` int NOT NULL,
  `publico` tinyint NOT NULL,
  `maduro` tinyint NOT NULL,
  `completo` tinyint NOT NULL,
  `categorias` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  `etiquetas` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci DEFAULT NULL,
  `portada` varchar(255) CHARACTER SET utf16 COLLATE utf16_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_libro`,`autor`),
  KEY `id_user_idx` (`autor`),
  CONSTRAINT `id_user` FOREIGN KEY (`autor`) REFERENCES `usuarios` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (1,'Accesscode Talker - Yu-Gi-Oh!',1,'Historia e informacion de Accesscode Talker',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/Accesodificador%20hablador.png?alt=media&token=744705be-427b-4a6c-94c4-c22cd0686edc'),(2,'Splash Mage - Yu-Gi-Oh!',1,'Historia e informacion de Splash Mage',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/Foto_mago_salpicadura.webp?alt=media&token=05b62c35-0cc8-4908-a162-bad6b1463a0e'),(3,'IRIS - Goliath\'s Throne',1,'La historia de un esqueleto, luchando contra la corrupción de Abrahm Valentin',1,1,0,0,'fantasia','iris','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/Goliaths%2BThrone%2BBanner.png?alt=media&token=81c0ad90-7838-4b9e-86e0-6a484bf8fb46'),(4,'IRIS - Dawn of the Dimetrix',1,'La historia que cuenta los hechos antes del evento \"Goliath\'s Throne\", donde Abrahm Valentin encuentra el IRIS y lo replica, creando al \"Dimetrix\".',1,1,0,0,'fantasia','iris','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/dawn-of-the-dimetrix.webp?alt=media&token=0ac40f44-fc75-4330-8e7e-f29628ed9f47'),(5,'IRIS - The Story of Vegala',1,'La historia que cuenta los hechos en conexión con los eventos de \"Dawn of the Dimetrix\". Ellos no están solos...',1,1,0,1,'fantasia','iris','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/Story%2Bof%2BVegala%2BBanner%2BPortrait.png?alt=media&token=dcfbd549-ebef-495a-91c3-0bc139818ab5'),(6,'IRIS - Regreso de Goliath',1,'Después de los hechos del evento \"Goliath\'s Throne\", Goliath ha vuelto para acabar con Abrahm Valentin... Estamos ASCENDIENDO... EN EL IRIS...',1,1,0,1,'fantasia','iris','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/regreso-goliath.png?alt=media&token=d4d35c63-e16d-4022-b95d-4d995aa378a7'),(7,'Maliss QUEEN RED RANSOM - Yu-Gi-Oh!',1,'Historia e informacion de Maliss QUEEN RED RANSOM',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/profile-characterai.jpg?alt=media&token=1f15db8c-38aa-4005-b5b7-a5189d2ccbf6'),(8,'Maliss Pawn Cheshire Cat - Yu-Gi-Oh!',1,'Historia e informacion de Maliss Pawn Cheshire Cat',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/malice_pawn_cheshire_cat_by_d_evil6661_dhxv86h-fullview.jpg?alt=media&token=be2fe8a6-27a6-4fe7-a352-ea209ab553ba'),(9,'Maliss Pawn Dormouse - Yu-Gi-Oh!',1,'Historia e informacion de Maliss Pawn Dormouse',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/images.jfif?alt=media&token=bfbb07a9-e0fa-4f69-b09d-31859889a025'),(10,'Transcode Talker - Tu-Gi-Oh!',1,'Historia e informacion de Transcode Tlaker',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/transcode%20talker.jfif?alt=media&token=766e808c-dff0-40ac-8702-4258c3db5337'),(11,'Maliss Pawn White Rabbit - Yu-Gi-Oh!',1,'Historia e informacion de Maliss Pawn White Rabbit',1,1,0,1,'anime','yugioh','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/whiterabbit.png?alt=media&token=fd70af16-432e-4a00-8743-707a8c909b08'),(12,'Mi nuevo hogar - (BNHA y Tn)',2,'Esta es mi primera historia espero que les guste :)',4,1,0,0,'anime','bnha','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/eaf464997c908a1adec6e55c9978e1df.jpg?alt=media&token=a2630ce2-9deb-400c-8132-94722ea4469a'),(13,'Mi novia loca | Himiko Toga x Tu',2,'Me gusta shipear a Himiko :P',1,1,1,0,'anime','bnha','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/image-example.png?alt=media&token=737f5e0e-ba01-474b-9fc3-833aa2502ad7'),(14,'BNHA reacciona a sus ships OwO',2,'A  ver como reaccionan estos niños >:)',5,1,0,0,'anime','bnha','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/582955fe5248da82ef2df5d3f3f352eb.jpg?alt=media&token=39f25464-e321-4102-b578-c9c10a775648'),(15,'Unidos! | BNHA',2,'No sé es lo primero que se me ocurrió :u',2,1,0,0,'anime','bhna','https://firebasestorage.googleapis.com/v0/b/lovell-app.appspot.com/o/41959da80289733ae6780e36d63e7d5b.jpg?alt=media&token=5bbe0294-40e6-4574-a3e3-3cd658bc90fd');
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
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

-- Dump completed on 2024-11-01 14:06:52
