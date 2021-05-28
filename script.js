var order = [];
var a = 0;
var b = 400;

            function displayOrder() {
                document.getElementById('listOfOrder').innerHTML = "";
                var i = 0;
                for (var x = 0; x<order.length; x++) {
                    document.getElementById('listOfOrder').innerHTML += "<li>" + "<p id='cartList'>" + order[x].prod_name + "</p>" + " Php " + order[x].prod_price + "<button onclick='removeFromCart(this.id)' class='removeFromCart' id='" + i++ + "'>Remove</button>" + "</li>";
                }
            }

            function displayTotal() {
                a = a + order[order.length-1].prod_price;
                var total = a;
                document.getElementById('total').innerHTML = "Total: " + "Php " + total;
            }

            function removeFromCart(clicked_id) {
                var z = clicked_id;
                a = a - order[z].prod_price;
                var total = a;
                document.getElementById('total').innerHTML = "Total: " + "Php " + total;
                order.splice(z,1);
                displayOrder();
                decreaseTotal();
            }

            function goShop() {
				document.getElementById('level3').style.display = "block";
				document.getElementById('level2').style.display = "none";
				document.getElementById('level5').style.display = "block";
				document.getElementById('searchbar').style.display = "block";
				document.getElementById('search').style.display = "block";
				document.getElementById('level4').style.display = "block";
				document.getElementById('category').style.display = "inline";
				document.getElementById('levelx').style.display = "none";
			}
			
            function learnmore() {
				document.getElementById('level2').style.display = "none";
				document.getElementById('levelx').style.display = "block";
				document.getElementById('level12').style.display = "block";
			}

			function returnHome() {
				document.getElementById('level3').style.display = "none";
				document.getElementById('level2').style.display = "block";
				document.getElementById('level4').style.display = "none";
				document.getElementById('level5').style.display = "none";
				document.getElementById('level6').style.display = "none";
				document.getElementById('level7').style.display = "none";
				document.getElementById('level8').style.display = "none";
				document.getElementById('level9').style.display = "none";
				document.getElementById('level0').style.display = "none";
				document.getElementById('level11').style.display = "none";
				document.getElementById('searchbar').style.display = "block";
				document.getElementById('search').style.display = "block";
        window.location.reload();
		document.getElementById('levelx').style.display = "none";
			}
            function goAisle() {
				var aisle = ["Drinks and Beverages", "Foods, Snacks, Treats", "Canned Goods", "Health and Personal Care Products"];
				var aislecat = 	document.getElementById("category").value;
				if (aislecat == aisle[0]) {
					document.getElementById('level3').style.display = "block";
					document.getElementById('level2').style.display = "none";
					document.getElementById('level5').style.display = "block";
					document.getElementById('searchbar').style.display = "block";
					document.getElementById('search').style.display = "block";
					document.getElementById('level4').style.display = "block";
					document.getElementById('level5').style.display = "block";
					document.getElementById('level6').style.display = "none";
					document.getElementById('level7').style.display = "none";
					document.getElementById('level8').style.display = "none";
					document.getElementById('level9').style.display = "none";
					document.getElementById('level0').style.display = "none";
					document.getElementById('level11').style.display = "none";

				}	else if (aislecat == aisle[1]) {
					document.getElementById('level3').style.display = "block";
					document.getElementById('level2').style.display = "none";
					document.getElementById('level5').style.display = "block";
					document.getElementById('searchbar').style.display = "block";
					document.getElementById('search').style.display = "block";
					document.getElementById('level4').style.display = "none";
					document.getElementById('level5').style.display = "none";
					document.getElementById('level6').style.display = "block";
					document.getElementById('level7').style.display = "block";
					document.getElementById('level8').style.display = "none";
					document.getElementById('level9').style.display = "none";
					document.getElementById('level0').style.display = "none";
					document.getElementById('level11').style.display = "none";

				}	else if (aislecat == aisle[2]) {
					document.getElementById('level3').style.display = "block";
					document.getElementById('level2').style.display = "none";
					document.getElementById('level5').style.display = "block";
					document.getElementById('searchbar').style.display = "block";
					document.getElementById('search').style.display = "block";
					document.getElementById('level4').style.display = "none";
					document.getElementById('level5').style.display = "none";
					document.getElementById('level6').style.display = "none";
					document.getElementById('level7').style.display = "none";
					document.getElementById('level8').style.display = "block";
					document.getElementById('level9').style.display = "block";
					document.getElementById('level0').style.display = "none";
					document.getElementById('level11').style.display = "none";

				}	else if (aislecat == aisle[3]) {
					document.getElementById('level3').style.display = "block";
					document.getElementById('level2').style.display = "none";
					document.getElementById('level5').style.display = "block";
					document.getElementById('searchbar').style.display = "block";
					document.getElementById('search').style.display = "block";
					document.getElementById('level4').style.display = "none";
					document.getElementById('level5').style.display = "none";
					document.getElementById('level6').style.display = "none";
					document.getElementById('level7').style.display = "none";
					document.getElementById('level8').style.display = "none";
					document.getElementById('level9').style.display = "none";
					document.getElementById('level0').style.display = "block";
					document.getElementById('level11').style.display = "block";
				}
			}
			function add1() {
				var prod = {
                    prod_name: "C2 500mL",
                    prod_price: 35.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add2() {
				var prod = {
                    prod_name: "DemiSoda Apple 250mL",
                    prod_price: 40.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add3() {
				var prod = {
                    prod_name: "Coca-Cola (Can) 330mL",
                    prod_price: 20.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add4() {
				var prod = {
                    prod_name: "BLUE Water-based Drink 500mL",
                    prod_price: 30.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add5() {
				var prod = {
                    prod_name: "Fanta Orange Flavour 250mL",
                    prod_price: 15.00,
                };

                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add6() {
				var prod = {
                    prod_name: "MUG Root Beer 355mL",
                    prod_price: 25.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add7() {
				var prod = {
                    prod_name: "Mang Juan Chicharon 90g",
                    prod_price: 18.00,
                }
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add8() {
				var prod = {
                    prod_name: "Cheetos Crunchy Cheese 8oz",
                    prod_price: 150.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add9() {
				var prod = {
                    prod_name: "Doritos Nacho Cheese 198g",
                    prod_price: 145.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add10() {
				var prod = {
                    prod_name: "m&m Peanuts (fun size)",
                    prod_price: 250.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add11() {
				var prod = {
                    prod_name: "Oreo original (9 packs)",
                    prod_price: 100.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add12() {
				var prod = {
                    prod_name: "Skittles original (fun size)",
                    prod_price: 69.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add13() {
				var prod = {
                    prod_name: "Delimondo Garlic & Chili Corned Beef",
                    prod_price: 130.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add14() {
				var prod = {
                    prod_name: "MEGA Sardines in Tomato sauce w/ Chili 155g",
                    prod_price: 20.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add15() {
				var prod = {
                    prod_name: "Century Tuna Premium Chunks in Oil 184g",
                    prod_price: 30.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add16() {
				var prod = {
                    prod_name: "SPAM Less 25% sodium",
                    prod_price: 180.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add17() {
				var prod = {
                    prod_name: "Ram Green Peas 225g",
                    prod_price: 40.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add18() {
				var prod = {
                    prod_name: "Libby    Vienna Sausage 4.6oz",
                    prod_price: 55.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add19() {
				var prod = {
                    prod_name: "Dove Nutritive Solutions Daily Moisture Shampoo 12oz",
                    prod_price: 120.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add20() {
				var prod = {
                    prod_name: "Axe Apollo Deodorant Bodyspray 150ml",
                    prod_price: 180.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add21() {
				var prod = {
                    prod_name: "Colgate Triple Action Anticavity Toothpaste (33g)",
                    prod_price: 170.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add22() {
				var prod = {
                    prod_name: "Cetaphil Light Moisturizing Lotion (237ml)",
                    prod_price: 800.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add23() {
				var prod = {
                    prod_name: "Sanicare Unscented 3-Ply Facial Tissues",
                    prod_price: 300.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}
            function add24() {
				var prod = {
                    prod_name: "Green Cross Isopropyl Alcohol 70% Solution",
                    prod_price: 113.00,
                };
                order.push(prod);
                displayOrder();
                displayTotal();
			}


            function submitinfo() {
                document.getElementById('cust_order').value = JSON.stringify(order);

                if (document.getElementById('cust_name').value==""||(document.getElementById('cust_addr').value==""||document.getElementById('cust_email').value=="")) {
                        alert("Incomplete Information!");
                        return false;
                    }

                else{
                    document.getElementById('checkout').type="submit";
                    document.getElementById('form').action="http://savantandsparktest.ml/checkout.php";

                    document.getElementById('form').method="POST";
                    }
            }
