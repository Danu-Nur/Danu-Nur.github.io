document.write(`
<nav id="navtop" class="navbar navbar-expand-lg py-lg-4" style="font-size: 14px;">
	<div class="container">
		<a class="navbar-brand position-relative" href="index.html">
			<img src="assets/img/logo/supresso.png" class="img-fluid" alt="supresso">
			<h1 class="position-absolute top-50 start-50 translate-middle fs-reset visually-hidden">SUPRESSO</h1>
		</a>
		<button class="navbar-toggler navbar-toggler-search rounded-0 border-0 text-reset ms-auto" data-bs-toggle="modal" data-bs-target="#modalSearching">
			<i class="bi bi-search"></i>
		</button>
		<button class="navbar-toggler navbar-toggler-menu-dashboard rounded-0 border-0 text-reset" data-bs-toggle="offcanvas" data-bs-target="#sidebarDashboard" style="display: none;">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse">
			<script type="text/javascript" src="component/menu.js"></script>
			<ul class="navbar-nav text-uppercase fw-medium ms-lg-4 nav-dot nav-hover">
				<li class="nav-item">
					<a class="nav-link text-reset" id="navtop-search" data-bs-toggle="modal" href="#modalSearching">
						<h5 class="fs-6 fw-medium fs-reset mb-0">search</h5>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-reset" id="navtop-account" href="signin.html">
						<h5 class="fs-6 fw-medium fs-reset mb-0">account</h5>
					</a>
				</li>
				<li class="nav-item position-relative">
					<a class="nav-link text-reset" id="navtop-cart" href="cart.html">
						<h5 class="fs-6 fw-medium fs-reset mb-0">cart</h5>
					</a>
					<span class="badge p-1 border border-light rounded-pill position-absolute translate-middle" style="z-index: 20; background-color: #fd4f00; font-size: .75rem !important; min-width: 21.6px; top: calc(50% - 16.8px); left: calc(50% + 20px);">0</span>
				</li>
			</ul>
		</div>
	</div>
</nav>

<button onclick="topFunction()" id="myBtn" class="btn btn-dark p-0 fixed-bottom" style="left: unset; right: 1rem; bottom: 4rem; display: none;" title="button go to top page">
	<div class="p-4 position-relative">
		<div class="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center lh-1">
			<i class="bi bi-chevron-compact-up" style="font-size: 2rem;"></i>
			<span style="transform: translateY(-50%);">TOP</span>
		</div>
	</div>
</button>
<script>
	let mybutton = document.getElementById("myBtn");

	window.onscroll = function() {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
</script>
`)