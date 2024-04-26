document.write(`
<div class="offcanvas offcanvas-end text-reset" data-bs-scroll="false" data-bs-backdrop="static" tabindex="-1" id="sidebarFilter" aria-labelledby="sidebarFilterLabel">
    <div class="offcanvas-body p-0 d-flex flex-column">
        <header>
            <div class="container-fluid py-3 d-flex justify-content-between">
                <h5 class="offcanvas-title fw-medium fs-4" id="sidebarFilterLabel">Filter</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </header>
        <main>
            <div class="container-fluid">
                <p class="small text-end mb-2 opacity-50">Quick Filter</p>
                <ul class="list-group list-group-flush text-capitalize mb-4">
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="checkbox" value="" id="formBeans" checked>
                            <label class="form-check-label w-100 text-start" for="formBeans">
                                <h2 class="fs-reset mb-0">coffee beans</h2>
                            </label>
                        </div>
                    </li>
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="checkbox" value="" id="formGrounds">
                            <label class="form-check-label w-100 text-start" for="formGrounds">
                                <h2 class="fs-reset mb-0">grounds coffee</h2>
                            </label>
                        </div>
                    </li>
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="checkbox" value="" id="formDrip">
                            <label class="form-check-label w-100 text-start" for="formDrip">
                                <h2 class="fs-reset mb-0">drip coffee</h2>
                            </label>
                        </div>
                    </li>
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="checkbox" value="" id="formCapsules">
                            <label class="form-check-label w-100 text-start" for="formCapsules">
                                <h2 class="fs-reset mb-0">coffee capsules</h2>
                            </label>
                        </div>
                    </li>
                </ul>
                <p class="small text-end mb-2 opacity-50">Sort by</p>
                <ul class="list-group list-group-flush text-capitalize mb-4">
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="radio" name="radio" id="sortHightLow" checked>
                            <label class="form-check-label w-100 text-start" for="sortHightLow">price hight to low</label>
                        </div>
                    </li>
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="radio" name="radio" id="sortLowHight">
                            <label class="form-check-label w-100 text-start" for="sortLowHight">price low to hight</label>
                        </div>
                    </li>
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="radio" name="radio" id="sortAZ">
                            <label class="form-check-label w-100 text-start" for="sortAZ">name A - Z</label>
                        </div>
                    </li>
                    <li class="list-group-item px-0 text-reset">
                        <div class="form-check form-check-reverse">
                            <input class="form-check-input rounded-circle" type="radio" name="radio" id="sortZA">
                            <label class="form-check-label w-100 text-start" for="sortZA">name Z - A</label>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer class="mt-auto">
            <div class="container-fluid py-3">
                <div class="row gx-2">
                    <div class="col">
                        <button class="btn btn-light w-100">Reset</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-dark w-100">Apply</button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
`)