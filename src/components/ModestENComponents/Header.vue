<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__logo header-logo">
					<h1 class="header-logo__title">M<span class="header-logo__o">o</span>dest.</h1>
				</div>
				<div class="header__menuToggle menu-toggle" v-if="show" key="on" @click="show = false">
					<div class="menu-toggle__hamburger hamburger" >
						<span class="hamburger__item"></span>
						<span class="hamburger__item"></span>
						<span class="hamburger__item"></span>
					</div>
				</div>
				<div class="header__menuToggle menu-toggle" v-else key="off" @click="show = true">
					<div class="menu-toggle__hamburger hamburger" >
						<span class="hamburger__item"></span>
						<span class="hamburger__item"></span>
						<span class="hamburger__item"></span>
					</div>
				</div>
				<ul class="header__nav header-nav" v-bind:class="{ active: show }" v-if="show">
					<router-link tag="li" class="header-nav__item header-nav-item" :to="link.link" active-class="header-nav-item__link_active" exact v-for="link in links">
						<a class="header-nav-item__link">{{ link.name }}</a>
					</router-link>		
				</ul>
				<ul class="header__nav header-nav">
					<router-link tag="li" class="header-nav__item header-nav-item" :to="link.link" active-class="header-nav-item__link_active" exact v-for="link in links">
						<a class="header-nav-item__link">{{ link.name }}</a>
					</router-link>		
				</ul>
			</div>
		</div>
	</header>
</template>	

<script>
	export default {
		data() {
			return{
				show: false,
				links: [
					{
						name: 'Home',
						link: '/'
					},
					{
						name: 'About',
						link: '#about'
					},
					{
						name: 'Work',
						link: '#work'
					},
					{
						name: 'Team',
						link: '#team'
					},
					{
						name: 'Services',
						link: '#services'
					},
					{
						name: 'Features',
						link: '#features'
					},
					{
						name: 'Contact',
						link: '#contact'
					},
				]
			}
		}
	}
</script>
