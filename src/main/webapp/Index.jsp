<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1" http-equiv="refresh" content="none">
	<link rel="stylesheet" type="text/css" href="styleOne.css">
	<title> Free Images & Pictures | Finds by Snehya  </title>
<body>
	<div id="title">
		<h1> Finds by <icon id="sneya"> Snehya </icon> </h1>
		
		<div id="searchBox">
			<input id="searchText" type="text" placeholder="Search Here.." onkeydown="fetchData(event)" autocomplete="off">
		</div>
	</div>
	
	<nav id="navbar"> <!-- Navbar Start -->
		<ul>
			<li class="navList"> <button type="button" id="searchButton" class="inputData" value="nature"> Nature </button> </li>
			<li class="navList"> <button type="button" id="searchButton" class="inputData" value="food"> Food </button> </li>
			<li class="navList"> <button type="button" id="searchButton" class="inputData" value="travel"> Travel </button> </li>
			<li class="navList"> <button type="button" id="searchButton" class="inputData" value="animal"> Animal </button> </li>
			<li class="navList"> <button type="button" id="searchButton" class="inputData" value="fashion"> Fashion </button> </li>
			<li class="navList"> <button type="button" id="searchButton" class="inputData" value="architecture"> Architecture </button> </li>
		</ul>
	</nav> <br> <!-- Navbar End -->

	<div id="gridContainer">
		<div id="imageContainer"> <!--  Images will be appended here --> </div>
	</div>
	
	<script src="api.js"></script>
</body>
</html>


























