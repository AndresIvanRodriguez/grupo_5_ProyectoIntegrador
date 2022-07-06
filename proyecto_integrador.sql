-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-05-2022 a las 02:28:58
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_integrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nombreCategoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nombreCategoria`) VALUES
(1, 'Montaña'),
(2, 'Ruta'),
(3, 'Urbano'),
(4, 'BMX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `descuento` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `material` varchar(255) NOT NULL,
  `numDeCambios` int(11) NOT NULL,
  `tipoFreno` varchar(255) NOT NULL,
  `suspension` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoriaId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `precio`, `color`, `genre`, `descuento`, `descripcion`, `material`, `numDeCambios`, `tipoFreno`, `suspension`, `imagen`, `stock`, `categoriaId`, `typeId`) VALUES
(2, ' Jeep Baltoro ', 950000, ' Negro-Naranja ', ' Unisex ', 20, ' Bicicleta de Montaña Jeep Baltoro 29 pulgadas black-orange ', ' Aluminio ', 21, ' Montaña ', ' Delantera ', './montaña/2 Montaña Jeep Baltoro 1.jpg ', 5, 1, NULL),
(3, ' Kawasaki Dominator ', 1100000, ' Negro-Rojo ', ' Unisex ', 30, ' Bicicleta de Montaña Kawasaki Dominator 29 Pulgadas ', ' Aluminio ', 10, ' Montaña ', ' Delantera ', './montaña/3 Montaña Kawasaki Dominator 1.jpg ', 5, 1, NULL),
(4, ' GW Hyena ', 720000, ' Negro ', ' Unisex ', 15, ' Bicicleta GW Hyena rin 27,5 de 24 Velocidades ', ' Aluminio ', 24, ' Montaña ', ' Delantera ', './montaña/4 Montaña GW Hyena 1.jpg ', 5, 1, NULL),
(5, ' Ninja kawasaki ', 1200000, ' Negro mate ', ' Unisex ', 15, '  Bicicleta de Montaña Kawasaki Ninja 29 Pulgadas ', ' Aluminio ', 24, ' Montaña ', ' doble ', './montaña/5 Montaña Ninja Kawasaki 1.jpg ', 5, 1, NULL),
(6, ' Kawasaki Expert ', 1100000, ' Verde ', ' Unisex ', 10, ' Bicicleta Montaña Kawasaki Expert 27.5 pulgadas ', ' Aluminio ', 24, ' Montaña ', ' Doble ', './montaña/6 Montaña Kawasaki Expert 1.jpg ', 5, 1, NULL),
(7, ' Schwinn Knowles ', 1000000, ' Verde ', ' Unisex ', 40, ' Bicicleta de Montaña Schwinn Knowles 29 Pulgadas ', ' Aluminio ', 21, ' Montaña ', ' Doble ', './montaña/7 Montaña Schwinn Knowles 1.jpg ', 5, 1, NULL),
(8, ' Jeep Milano ', 1200000, ' Negro ', ' Unisex ', 10, ' Bicicleta de Ruta Jeep Milano 1 700c ', ' Aluminio ', 14, ' Ruta ', ' Sin suspensión ', './ruta/8 Ruta Jeep Milano 1.jpg ', 5, 2, NULL),
(9, ' GW Sacramento ', 1800000, ' Gris ', ' Unisex ', 10, ' Bicicleta de Ruta GW Sacramento 700c ', ' Aluminio ', 9, ' Ruta ', ' Sin suspensión ', './ruta/9 Ruta GW Sacramento 1.jpg ', 5, 2, NULL),
(10, ' Java Siluro ', 4700000, ' Blanco ', ' Unisex ', 10, ' Bicicleta De Ruta Java Siluro 3D 700C ', ' Aluminio ', 11, ' Ruta ', ' Sin suspensión ', './ruta/10 Ruta Java Siluro 3D 700C 1.jpg ', 5, 2, NULL),
(11, ' Java Vesuvio D ', 3900000, ' Negro ', ' Unisex ', 12, ' Bicicleta De Ruta Java Vesuvio D 700C ', ' Carbono ', 11, ' Ruta ', ' Sin suspensión ', './ruta/11 Ruta Java Vesuvio D 700C 1.jpg ', 5, 2, NULL),
(12, ' Jeep Nanga ', 990000, ' Azul ', ' Unisex ', 8, ' Bicicleta de Ruta Jeep Nanga 28 pulgadas ', ' Aluminio ', 7, ' Ruta ', ' Sin suspensión ', './ruta/12 Ruta Jeep Nanga 1.jpg ', 5, 2, NULL),
(13, ' Merida ', 3900000, ' Blanco ', ' Unisex ', 8, ' 7000-E Bicicleta de Carretera S Merida Reacto brillante TITAN/SILK 2021 Di2 Racing ', ' Fibra de Carbón ', 7, ' Ruta ', ' Sin suspensión ', './ruta/13 Bicicleta de Carretera S Merida Reacto 1.jpg ', 5, 2, NULL),
(14, ' TRIBAN ', 2100000, ' Blanco ', ' Unisex ', 8, ' Bicicleta Triban Rc 120 disco cn fr ', ' Aluminio ', 7, ' Ruta ', ' Sin suspensión ', './ruta/14 TRIBAN 1.jpg ', 5, 2, NULL),
(15, ' Jeep Nuptse ', 960000, ' Negro ', ' Unisex ', 14, ' Bicicleta Urbana Jeep Nuptse 28 pulgadas ', ' Aluminio ', 7, ' Urbana ', ' Sin suspensión ', './urbana/15 Urbana Jeep Nuptse 1.jpg ', 5, 3, NULL),
(16, ' Gear Cardinal ', 490000, ' Blanco ', ' Mujer ', 5, ' Bicicletas Urbana Mountain Gear Cardinal 26 Pulgadas ', ' Acero ', 18, ' Urbana ', ' Sin suspensión ', './urbana/16 Urbana Mountain Gear Cardinal 1.jpg ', 5, 3, NULL),
(17, ' Scoop Rome ', 500000, ' Negro ', ' Unisex ', 0, ' Bicicleta Urbana Rome. 28.V21 Scoop 28 Pulgadas ', ' Acero ', 6, ' Urbana ', ' Sin suspensión ', './urbana/17 Urbana Rome. 28.V21 Scoop 1.jpg ', 5, 3, NULL),
(18, ' Schwinn Network ', 590000, ' Azul ', ' Unisex ', 30, ' Bicicleta Urbana Schwinn Network 700c ', ' Acero ', 7, ' Urbana ', ' Delantera ', './urbana/18 Urbana Schwinn Network 1.jpg ', 5, 3, NULL),
(19, ' Scoop Amsterdam ', 590000, ' Blanco ', ' Mujer ', 5, ' Bicicleta Urbana Scoop Amsterdam V18 28 pulgadas ', ' Acero ', 6, ' Urbana ', ' Sin suspensión ', './urbana/19 Urbana Scoop Amsterdam 1.jpg ', 5, 3, NULL),
(20, ' Scoop Flyer ', 590000, ' Gris ', ' Unisex ', 14, ' Bicicleta Urbana Scoop Flyer 28 V20 28 pulgadas ', ' Acero ', 7, ' Urbana ', ' Sin suspensión ', './urbana/20 Urbana Scoop Flyer 1.jpg ', 5, 3, NULL),
(21, ' Victory ', 480000, ' Azul ', ' Unisex ', 5, ' Bicicleta urbana 26 pulgadas Urbana ', ' Aluminio ', 18, ' Urbana ', ' Sin suspensión ', './urbana/21 Urbana victory 1.jpg ', 5, 3, NULL),
(22, ' Freestyle Huffy ', 780000, ' Cafe ', ' Unisex ', 5, ' Bicicleta Freestyle 23549A Huffy 20 pulgadas ', ' Acero ', 0, ' BMX ', ' Sin suspensión ', './bmx/22 Freestyle23549A Huffy1.jpg ', 5, 4, NULL),
(23, ' Bmx Stealth ', 1200000, ' Negro-azul ', ' Unisex ', 0, ' Bicicleta Bmx Stealth Bicicleta Freestyle Elite 20 pulgadas  ', ' Acero ', 0, ' BMX ', ' Sin suspensión ', './bmx/23 Bmx Stealth 1.jpg ', 5, 4, NULL),
(32, ' KHE Strikedown Pro ', 2200000, ' Gris ', ' Unisex ', 5, ' Bicicleta BMX KHE Strikedown Pro 20 pulgadas fijar Rotor Stealth Grey sólo 9,7kg ', ' Acero ', 0, ' BMX ', ' Sin suspensión ', './bmx/24 BMX KHE Strikedown Pro 1.jpg ', 5, 4, NULL),
(33, ' BMX Manivela ', 1780000, ' Blanco ', ' Unisex ', 5, ' Bicicleta BMX Elite Outlaw 26pulgadas Manivela ', ' Chrome ', 0, ' BMX ', ' Sin suspensión ', './bmx/25 BMX Bicicleta Bici Manivela 1.jpg ', 5, 4, NULL),
(34, ' KHE United Roouse ', 980000, ' Azul-negro ', ' Unisex ', 5, ' Bicicleta BMX KHE United Roouse Negro Azul 20 pulgadas con rotor sólo 11,65kg ', ' Acero ', 0, ' BMX ', ' Sin suspensión ', './bmx/26 BMX KHE United Roouse 1.jpg ', 5, 4, NULL),
(35, ' The Stealth ', 970000, ' Blanco ', ' Unisex ', 5, ' BMX Elite The Stealth 20 pulgadas Freestyle ', ' Acero ', 0, ' BMX ', ' Sin suspensión ', './bmx/27 BMX Elite The Stealth 1.jpg ', 5, 4, NULL),
(47, ' Jeep Baltoro Vesubios ', 950000, ' Negro ', ' Unisex ', 20, ' nan ', ' Aluminio ', 21, ' Montaña ', ' Delantera ', './montaña/1 Montaña Jeep Baltoro 1.jpg ', 5, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`) VALUES
(1, 'admin'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `direccion`, `fechaNacimiento`, `password`, `imagen`, `roleId`) VALUES
(8, 'Nelson Giobanny', 'Rodriguez Fernández', 'nelmman@hotmail.com', 'Sopó', '1995-02-08', '$2a$10$AY0cW78gEbVhpk1FJNT/kuYxUo4m.T31xXrmk1WXx.UVq7TWGskuy', '1645538790035-IMG_20211118_120316.jpg', 1),
(10, 'Nelson Giobanny', 'Rodriguez Fernández', 'nelmman93@gmail.com', 'Sopó', '2000-10-10', '$2a$10$wG9mLZLGHOilSC6FCFMune.6ynxjf9chsz4Vv1qB8a7C3xkm8kDR.', 'default-Imagen.png', 2),
(21, 'Juan Diego', 'Quintero Peralta', 'juandiegoq56@gmail.com', 'Prado Tolima', '2000-11-21', '$2a$10$uTZPTpJLfJyfA4aHrijR/uhhEZvqu5vgOtANAaKZkxK/VpvHh4PFG', '1651765550293-1646095534534-nuevo_mote_cristiano_ronaldo_juventus_el_bicho_6811.jpg', 2),
(22, 'Diego Alexander', 'Mendoza Enriquez', 'diego@gmail.com', 'Bosa, Bogota', '1996-01-07', '$2a$10$zrKRC3Q4ggC5bASgPBfAFuigkVW1Apo74VjJuu7qqBKt/00vIXoA2', '1651768579641-1648934520253-owl-g93eaf9c0e_1280.jpg', 2),
(23, 'Maurio', 'Sierra', 'mauricio@dh.com', 'Barranquilla', '2000-12-12', '$2a$10$X5X6WyJlHbIH9xOxbSyfS.0zXOAYfqc.bK3kCUIfMQFNuLcj2UuBi', '1651796306651-1651768579641-1648934520253-owl-g93eaf9c0e_1280.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_products`
--

CREATE TABLE `users_products` (
  `id` int(11) NOT NULL,
  `users_id` int(11) DEFAULT NULL,
  `products_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_cea62b84-551e-426a-b59d-207a3dc0635c` (`typeId`),
  ADD KEY `FK_d670ab93-e7a6-4f47-b2b4-9b5fe6715bff` (`categoriaId`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_8a363243-3357-478f-8aec-e91d61999563` (`roleId`);

--
-- Indices de la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6574815d-ff99-4dd1-aa7f-6ea106ddc430` (`users_id`),
  ADD KEY `FK_d2fb48fd-8059-4e9d-b014-ba4d003b5c06` (`products_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users_products`
--
ALTER TABLE `users_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_cea62b84-551e-426a-b59d-207a3dc0635c` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`),
  ADD CONSTRAINT `FK_d670ab93-e7a6-4f47-b2b4-9b5fe6715bff` FOREIGN KEY (`categoriaId`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_8a363243-3357-478f-8aec-e91d61999563` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD CONSTRAINT `FK_6574815d-ff99-4dd1-aa7f-6ea106ddc430` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_d2fb48fd-8059-4e9d-b014-ba4d003b5c06` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
