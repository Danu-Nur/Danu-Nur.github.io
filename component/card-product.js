document.write(`
<!-- jika stock kosong tambahkan class "out-stock" di tag class "card-product" -->
<div class="card card-product rounded-0 border-0 text-reset">
	<div class="card-header rounded-0 p-0 border-0">
		<a class="text-decoration-none text-reset" href="detail.html">
			<div class="ratio ratio-1x1 bg-light rounded overflow-hidden">
				<img src="assets/img/product/no_images.svg" class="img-fluid opacity-50" alt="">
				<div class="img-loading d-flex justify-content-center align-items-center w-100 h-100">
					<div class="spinner-border text-dark" style="width: 30px; height: 30px;" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
				<img src="assets/img/product/supresso_sumatra_mandheling_coffee_beans_200g_1.png" class="img-fluid bg-light img-product" alt="">
				<img src="assets/img/product/supresso_sumatra_mandheling_coffee_beans_200g_2.png" class="img-fluid bg-light img-product" alt="">
			</div>
		</a>
		<div class="btn-add-to-cart position-absolute top-0 end-0 m-2 m-sm-3">
			<button class="btn btn-secondary p-0 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#modalAddToCart" style="width: 38px; height: 38px; font-size: 1.25rem;">
				<i class="bi bi-cart-plus"></i>
			</button>
		</div>
		<!-- aktifkan wobler jika terdapat potongan harga atau diskon dengan menambahkan class "d-none" / comment -->
		<div class="wobler position-absolute top-0 start-0">
			<div class="fw-medium p-2 lh-1 small" style="background-color: #fd4f00; color: #ffffff;">
				<span>SAVE 20%</span>
			</div>
		</div>
	</div>
	<div class="card-body text-center px-0 text-capitalize">
		<h3 class="card-title fs-6 fw-normal mb-0 opacity-75">
			<small>single origin</small>
		</h3>
		<h4 class="card-title fs-6 fw-medium mb-0">
			sumatra mandheling coffee beans
		</h4>
		<p class="card-text my-1">
			<small>200g</small>
		</p>
		<div class="card-text">
			<div class="product-price">
				<!-- jika harga normal aktifkan normal price/ jika harga promo tau diskon aktifkan special price, bisa dengan cara di comment atau tambahkan class "d-none" -->
				<div class="normal-price fw-medium">
					<span>Rp&nbsp;95.000,-</span>
				</div>				
				<div class="special-price d-flex flex-wrap justify-content-center align-items-center column-gap-2 d-none">
					<div class="discount-price text-primary fw-medium">
						<span>Rp&nbsp;75.000,-</span>
					</div>
					<div class="regular-price">
						<span class="opacity-50">Rp&nbsp;95.000,-</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`)