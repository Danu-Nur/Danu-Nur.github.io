document.write(`
<nav id="navdownDetail" class="border-top bg-light fixed-bottom">
    <div class="container py-3">
        <div class="row mb-3 g-3 justify-content-between align-items-center gx-lg-5">
            <div class="col col-12 col-lg col-xl-7 col-xxl-6 order-lg-3 mt-lg-0">
                <div class="d-lg-flex align-items-center">
                    <div class="mb-1 mb-lg-0 me-lg-2"><span class="text-nowrap">Grind size (optional) :</span></div>
                    <select name="" class="form-select border-secondary text-reset" id="">
                        <option value="1">Whole Beans</option>
                        <option value="2">Extra Coarse for Cold Brew</option>
                        <option value="3">Coarse for French Press, Chemex Coffee</option>
                        <option value="4">Medium for V60, Aeropress, Paper/Drip Filter</option>
                        <option value="5">Fine for Espresso, Moka Pot, Ibrik</option>
                    </select>
                </div>
            </div>
            <div class="col col-12 order-lg-1 mt-0 mt-lg-3">
                <div id="alert-out-stock"></div>
            </div>
            <div class="col col-auto order-lg-2 mt-lg-0">
                <div class="qty-product fs-5">
                    <button class="btn-minus"></button>
                    <input type="number" value="1" min="1" max="100" name="">
                    <button class="btn-plus" id="toggle-alert-out-stock"></button>
                </div>
            </div>
            <div class="col col-auto order-lg-4 mt-lg-0">
                <span class="fs-5 fw-medium">Total&nbsp;:&nbsp;Rp&nbsp;75.000,-</span>
            </div>
        </div>
        <button class="btn btn-lg btn-dark w-100" id="triggerToastAddToCart">
            Add To Cart <i class="bi bi-cart-plus"></i>
        </button>
    </div>
</nav>
`)