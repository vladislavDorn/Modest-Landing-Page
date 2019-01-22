<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__logo header-logo">
					<h1 class="header-logo__title">M<span class="header-logo__o">o</span>dest.</h1>
				</div>
				<div class="header__menuToggle menu-toggle" onclick="openNav()">
					<div class="menu-toggle__hamburger hamburger">
						<span class="hamburger__item"></span>
						<span class="hamburger__item"></span>
						<span class="hamburger__item"></span>
					</div>
				</div>
				<ul class="header__nav header-nav" id="myNav">
					<router-link tag="li" class="header-nav__item header-nav-item" to="/Modest" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">Home</a>
					</router-link>
					<router-link tag="li" class="header-nav__item header-nav-item" to="#" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">About</a>
					</router-link>	
					<router-link tag="li" class="header-nav__item header-nav-item" to="#" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">Work</a>
					</router-link>	
					<router-link tag="li" class="header-nav__item header-nav-item" to="#" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">Team</a>
					</router-link>	
					<router-link tag="li" class="header-nav__item header-nav-item" to="#" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">Services</a>
					</router-link>	
					<router-link tag="li" class="header-nav__item header-nav-item" to="#" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">Features</a>
					</router-link>	
					<router-link tag="li" class="header-nav__item header-nav-item" to="#" active-class="header-nav-item__link_active" exact>
						<a class="header-nav-item__link">Contact</a>
					</router-link>		
				</ul>
			</div>
		</div>
	</header>
</template>	

<script>

</script>
