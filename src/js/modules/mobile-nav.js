function mobileNav() {
	const navBtnOpen = document.getElementById('modalOpen');
	const navBtnClose = document.getElementById('modalClose');
	const nav = document.querySelector('.mobile-nav');
	const navOverlay = document.querySelector('.mobile-nav-overlay');

	function toggleMobileNav() {
		nav.classList.toggle('mobile-nav--open');
		navOverlay.classList.toggle('mobile-nav-overlay--active');
		document.body.classList.toggle('no-scroll');
	};

	navBtnOpen.onclick = toggleMobileNav
	navBtnClose.onclick = toggleMobileNav
	navBtnOpen.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;
}

export default mobileNav;