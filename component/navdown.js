document.write(`
<nav class="fixed-bottom border-top bg-white d-lg-none" id="navdown">
	<nav class="navbar p-0">
		<div class="container-fluid">
			<div class="collapse navbar-collapse" id="navcol">
				<div>
					<script type="text/javascript" src="component/menu.js"></script>
					<div style="padding: 0 .875rem">
						<hr class="m-0">
					</div>
					<ul class="navbar-nav ms-lg-auto text-uppercase nav-dot nav-hover py-4 py-lg-0">
						<li class="nav-item">
							<a class="nav-link text-reset" id="navtop-membership" href="membership.html">
								<h5 class="fs-6 fw-medium fs-reset mb-0">membership</h5>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-reset" id="navtop-contact" href="contact.html">
								<h5 class="fs-6 fw-medium fs-reset mb-0">contact</h5>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-reset" id="navtop-brochure" href="#">
								<h5 class="fs-6 fw-medium fs-reset mb-0">brochure</h5>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-reset" id="navtop-news" href="news.html">
								<h5 class="fs-6 fw-medium fs-reset mb-0">news</h5>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	<div class="py-2 overflow-hidden">
		<ul class="nav nav-justified nav-dot nav-hover" style="font-size: 1.5rem;">
			<li class="nav-item">
				<a class="nav-link text-reset d-flex justify-content-center align-items-center" id="navdown-home" href="index.html">
					<i class="icon-house"></i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-reset d-flex justify-content-center align-items-center" id="navdown-coffee" href="coffee.html">
					<i class="icon-coffee"></i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-reset d-flex justify-content-center align-items-center collapsed" id="navdownToggler" data-bs-toggle="collapse" href="#navcol">
					<i class="icon-three-dots-vertical"></i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link text-reset d-flex justify-content-center align-items-center" id="navdown-account" href="signin.html">
					<i class="icon-user"></i>
				</a>
			</li>
			<li class="nav-item position-relative">
				<a class="nav-link text-reset d-flex justify-content-center align-items-center" id="navdown-cart" href="cart.html">
					<i class="icon-cart"></i>
				</a>
				<span class="badge p-1 border border-light rounded-pill position-absolute translate-middle" style="z-index: 20; background-color: #fd4f00; font-size: .75rem !important; min-width: 21.6px; top: calc(50% - .75rem); left: calc(50% + .75rem);">0</span>
			</li>
		</ul>
	</div>
</nav>
`)