// ==================================================
// GLOBAL SCRIPT FOR DBZ E-COMMERCE
// Handles: All pages, cart, login, modals, search
// ==================================================
window.PRODUCT_LIST = [
  { id: 1, name: 'Car Floor Mats', price: 799, image: 'img/product1.jpeg', description: 'Universal fit, waterproof PVC mats' },
  { id: 2, name: 'Steering Wheel Cover', price: 299, image: 'img/product2.jpeg', description: 'Leather grip, anti-slip design' },
  { id: 3, name: 'Car Phone Holder', price: 199, image: 'img/product3.jpeg', description: 'Dashboard & AC vent mount' },
  { id: 4, name: 'LED Headlights', price: 5499, image: 'img/product4.jpeg', description: 'High brightness, white light' },
  { id: 5, name: 'Car Seat Covers', price: 6999, image: 'img/product5.jpeg', description: 'Breathable fabric, full set' },
  { id: 6, name: 'Reverse Parking Camera', price: 2499, image: 'img/product6.jpeg', description: 'Wide angle, night vision' },
  { id: 7, name: 'Car Vacuum Cleaner', price: 1499, image: 'img/product7.jpeg', description: '12V portable vacuum' },
  { id: 8, name: 'Roof Carrier', price: 3499, image: 'img/product8.jpeg', description: 'Heavy duty luggage carrier' },
  { id: 9, name: 'Car Jump Starter', price: 8599, image: 'img/product9.jpeg', description: 'Emergency power bank' },
  { id: 10, name: 'Tyre Inflator', price: 899, image: 'img/product10.jpeg', description: 'Digital display, auto cut-off' },

  { id: 11, name: 'Car Sunshade', price: 299, image: 'img/product11.jpeg', description: 'Foldable windshield sunshade' },
  { id: 12, name: 'Dash Camera', price: 1899, image: 'img/product12.jpeg', description: 'Full HD recording' },
  { id: 13, name: 'Bike Spray Polish', price: 249, image: 'img/product13.jpeg', description: 'Shine & scratch protection' },
  { id: 14, name: 'Car Key Cover', price: 219, image: 'img/product14.jpeg', description: 'Silicone key protector' },
  { id: 15, name: 'Pressure Washer Gun', price: 1199, image: 'img/product15.jpeg', description: 'High pressure car wash gun' },

  { id: 16, name: 'Car Door Edge Guard', price: 299, image: 'img/product16.jpeg', description: 'Protects doors from scratches' },
  { id: 17, name: 'Car Perfume Gel', price: 199, image: 'img/product17.jpeg', description: 'Long lasting fragrance' },
  { id: 18, name: 'Microfiber Cleaning Cloth (4 Pc)', price: 240, image: 'img/product18.jpeg', description: 'Lint-free car cleaning cloth' },
  { id: 19, name: 'Car Mobile Charger', price: 349, image: 'img/product19.jpeg', description: 'Dual USB fast charging' },
  { id: 20, name: 'Seat Belt Cushion (2 Pc)', price: 249, image: 'img/product20.jpeg', description: 'Comfortable shoulder padding' },

  { id: 21, name: 'Car Armrest Cushion', price: 699, image: 'img/product21.jpeg', description: 'Memory foam comfort pad' },
  { id: 22, name: 'Car Organizer', price: 499, image: 'img/product22.jpeg', description: 'Back seat storage organizer' },
  { id: 23, name: 'Car Cover', price: 1499, image: 'img/product23.jpeg', description: 'Dust & waterproof cover' },
  { id: 24, name: 'Fog Light Set', price: 2299, image: 'img/product24.jpeg', description: 'White LED fog lights' },
  { id: 25, name: 'Tyre Pressure Gauge', price: 299, image: 'img/product25.jpeg', description: 'Accurate pressure reading' },

  { id: 26, name: 'Car Cleaning Foam', price: 399, image: 'img/product26.jpeg', description: 'Snow foam shampoo' },
  { id: 27, name: 'Bike Mobile Holder', price: 299, image: 'img/product27.jpeg', description: 'Handle mount phone holder' },
  { id: 28, name: 'Helmet Lock', price: 199, image: 'img/product28.jpeg', description: 'Anti-theft helmet lock' },
  { id: 29, name: 'Bike Cover', price: 699, image: 'img/product29.jpeg', description: 'Waterproof bike cover' },
  { id: 30, name: 'Chain Lube Spray', price: 249, image: 'img/product30.jpeg', description: 'Smooth chain lubrication' },

  { id: 31, name: 'Car Door Handle Protector', price: 199, image: 'img/product31.jpeg', description: 'Scratch protection film' },
  { id: 32, name: 'Windshield Wiper', price: 399, image: 'img/product32.jpeg', description: 'All weather wiper blade' },
  { id: 33, name: 'Car Seat Neck Pillow', price: 499, image: 'img/product33.jpeg', description: 'Neck & spine support' },
  { id: 34, name: 'Battery Terminal Cleaner', price: 299, image: 'img/product34.jpeg', description: 'Improves battery life' },
  { id: 35, name: 'Car Boot Mat', price: 799, image: 'img/product35.jpeg', description: 'Anti-skid luggage mat' },

  { id: 36, name: 'Car Dashboard Polish (2 Nos)', price: 299, image: 'img/product36.jpeg', description: 'Anti-static dashboard cleaner' },
  { id: 37, name: 'Bike Handle Grips', price: 349, image: 'img/product37.jpeg', description: 'Anti-slip rubber grips' },
  { id: 38, name: 'Number Plate Frame', price: 249, image: 'img/product38.jpeg', description: 'Stylish metal frame' },
  { id: 39, name: 'Car Tyre Cleaner', price: 349, image: 'img/product39.jpeg', description: 'Deep tyre shine' },
  { id: 40, name: 'Car Bluetooth FM Transmitter', price: 899, image: 'img/product40.jpeg', description: 'Handsfree music & calls' },

  { id: 41, name: 'Car Foot Rest', price: 499, image: 'img/product41.jpeg', description: 'Comfortable driving posture' },
  { id: 42, name: 'Bike LED Indicators', price: 699, image: 'img/product42.jpeg', description: 'Bright turn indicators' },
  { id: 43, name: 'Car Anti-Slip Dashboard Mat', price: 199, image: 'img/product43.jpeg', description: 'Holds phone & keys' },
  { id: 44, name: 'Car Air Pump', price: 1599, image: 'img/product44.jpeg', description: 'Portable heavy duty pump' },
  { id: 45, name: 'Bike Crash Guard', price: 2999, image: 'img/product45.jpeg', description: 'Engine protection guard' },

  { id: 46, name: 'Car Rear View Mirror', price: 349, image: 'img/product46.jpeg', description: 'Wide angle mirror' },
  { id: 47, name: 'Bike Brake Oil', price: 199, image: 'img/product47.jpeg', description: 'High performance DOT fluid' },
  { id: 48, name: 'Car Tyre Valve Caps', price: 149, image: 'img/product48.jpeg', description: 'Dustproof valve caps' },
  { id: 49, name: 'Car Sun Visor Organizer', price: 299, image: 'img/product49.jpeg', description: 'Card & document holder' },
  { id: 50, name: 'Bike Rear View Mirrors', price: 799, image: 'img/product50.jpeg', description: 'Universal bike mirrors' },

  { id: 51, name: 'Car Mud Flaps', price: 699, image: 'img/product51.jpeg', description: 'Set of 4 mud guards' },
  { id: 52, name: 'Bike Engine Oil', price: 499, image: 'img/product52.jpeg', description: '4T synthetic oil' },
  { id: 53, name: 'Car Door Welcome Lights', price: 899, image: 'img/product53.jpeg', description: 'LED projector logo lights' },
  { id: 54, name: 'Bike Tank Pad', price: 249, image: 'img/product54.jpeg', description: 'Scratch protection pad' },
  { id: 55, name: 'Car Cigarette Lighter Socket', price: 299, image: 'img/product55.jpeg', description: '12V power socket' },

  { id: 56, name: 'Car Steering Knob', price: 349, image: 'img/product56.jpeg', description: 'Easy steering control' },
  { id: 57, name: 'Bike Side Stand Plate', price: 199, image: 'img/product57.jpeg', description: 'Prevents sinking on mud' },
  { id: 58, name: 'Car USB LED Light', price: 199, image: 'img/product58.jpeg', description: 'Ambient interior lighting' },
  { id: 59, name: 'Bike Horn', price: 399, image: 'img/product59.jpeg', description: 'Loud dual tone horn' },
  { id: 60, name: 'Car Steering Cover Stitch', price: 799, image: 'img/product60.jpeg', description: 'DIY hand stitched cover' },

  { id: 61, name: 'Car Tissue Box', price: 249, image: 'img/product61.jpeg', description: 'Dashboard mounted box' },
  { id: 62, name: 'Bike Indicator Buzzer', price: 149, image: 'img/product62.jpeg', description: 'Reminder sound buzzer' },
  { id: 63, name: 'Car Parking Sensors', price: 2499, image: 'img/product63.jpeg', description: '4 sensor reverse assist' },
  { id: 64, name: 'Bike Headlight Bulb', price: 299, image: 'img/product64.jpeg', description: 'Bright halogen bulb' },
  { id: 65, name: 'Car Steering Lock', price: 1499, image: 'img/product65.jpeg', description: 'Anti-theft security lock' },

  { id: 66, name: 'Bike Number Plate Holder', price: 199, image: 'img/product66.jpeg', description: 'Vibration resistant frame' },
  { id: 67, name: 'Car Fire Extinguisher', price: 899, image: 'img/product67.jpeg', description: 'Safety emergency extinguisher' },
  { id: 68, name: 'Bike Handle Bar Risers', price: 699, image: 'img/product68.jpeg', description: 'Comfort riding posture' },
  { id: 69, name: 'Car Tyre Puncture Kit', price: 599, image: 'img/product69.jpeg', description: 'Emergency repair kit' },
  { id: 70, name: 'Bike Riding Gloves', price: 799, image: 'img/product70.jpeg', description: 'Full finger protective gloves' }
];



document.addEventListener('DOMContentLoaded', () => {

    // -------------------------
    // --- GLOBAL CONSTANTS ---
    // -------------------------
    const DEFAULT_IMAGE_SMALL = 'https://via.placeholder.com/60x60?text=DBZ';
    const DEFAULT_IMAGE_LARGE = 'https://via.placeholder.com/250x250?text=Product+Image';
    const INITIAL_LOGIN_HREF = 'login.html';
    const HOME_PAGE_HREF = 'index.html';
    const PLACEHOLDER_SHIPPING = 50.00;

    // -------------------------
    // --- USER DATABASE ---
    // -------------------------
    const DEFAULT_MOCK_USERS = {
        'admin': { password: 'password123', name: 'Site Administrator', email: 'admin@domain.com' }
    };

    const STORED_USERS = JSON.parse(localStorage.getItem('MOCK_USERS')) || DEFAULT_MOCK_USERS;

    if (!localStorage.getItem('MOCK_USERS')) {
        localStorage.setItem('MOCK_USERS', JSON.stringify(DEFAULT_MOCK_USERS));
    }

    // -------------------------
    // --- MODAL FUNCTION ---
    // -------------------------
    function showModal(title, body, buttonText = 'Close', buttonAction = () => {
        document.getElementById('messageModal').style.display = 'none';
    }) {
        const messageModal = document.getElementById('messageModal');
        const modalTitle = document.getElementById('messageModalTitle');
        const modalBody = document.getElementById('messageModalBody');

        modalTitle.textContent = title;
        modalBody.innerHTML = body;

        const oldButton = messageModal.querySelector('.modal-content .submit-btn');
        const newButton = oldButton.cloneNode(true);
        oldButton.parentNode.replaceChild(newButton, oldButton);

        newButton.textContent = buttonText;
        newButton.addEventListener('click', buttonAction);

        messageModal.style.display = 'flex';
    }

    // -------------------------
    // --- LOGIN / SIGNUP PAGE ---
    // -------------------------
    function initLoginPage() {

        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const showSignupBtn = document.getElementById('showSignup');
        const showLoginBtn = document.getElementById('showLogin');

        if (!loginForm || !signupForm) return;

        function switchToForm(form) {
            loginForm.classList.add('form-hidden');
            signupForm.classList.add('form-hidden');
            form.classList.remove('form-hidden');
        }

        showSignupBtn?.addEventListener('click', () => switchToForm(signupForm));
        showLoginBtn?.addEventListener('click', () => switchToForm(loginForm));

        // LOGIN HANDLER
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const usernameOrEmail = document.getElementById('login-username').value.trim().toLowerCase();
            const password = document.getElementById('login-password').value;

            let user = null;

            // check by username
            if (STORED_USERS[usernameOrEmail] && STORED_USERS[usernameOrEmail].password === password) {
                user = STORED_USERS[usernameOrEmail];
            }

            // check by email
            if (!user) {
                for (const key in STORED_USERS) {
                    if (STORED_USERS[key].email?.toLowerCase() === usernameOrEmail && STORED_USERS[key].password === password) {
                        user = STORED_USERS[key];
                        break;
                    }
                }
            }

            if (user) {
                localStorage.setItem('loggedInUser', user.name);
                showModal(
                    "Login Successful! 🚀",
                    `Welcome back, <strong>${user.name}</strong>!`,
                    "Continue",
                    () => window.location.href = HOME_PAGE_HREF
                );
            } else {
                showModal("Login Failed 🔒", "Invalid username/email or password.", "Try Again");
            }
        });

        // SIGNUP HANDLER
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const username = document.getElementById('signup-username').value.toLowerCase().trim();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            // Validation
            if (!name || !email || !username || !password || !confirmPassword) {
                showModal("Signup Error", "Please fill in all fields.", "OK");
                return;
            }

            if (password !== confirmPassword) {
                showModal("Signup Error", "Passwords do not match!", "Fix Passwords");
                return;
            }

            if (STORED_USERS[username]) {
                showModal("Signup Error", "Username already taken!", "Choose another");
                return;
            }

            // Create user
            STORED_USERS[username] = { name, email, password };
            localStorage.setItem("MOCK_USERS", JSON.stringify(STORED_USERS));

            showModal(
                "Account Created 🎉",
                "Your account is ready! Please log in.",
                "Go to Login",
                () => {
                    switchToForm(loginForm);
                    document.getElementById('login-username').value = username;
                    signupForm.reset();
                    document.getElementById('messageModal').style.display = 'none';
                }
            );
        });
    }

    // -------------------------
    // --- LOGIN STATUS UI ---
    // -------------------------
    const userNameLink = document.getElementById('userNameLink');
    const userNameText = document.getElementById('userNameText');
    const userDropdown = document.getElementById('userDropdown');
    const userMenuContainer = document.getElementById('userMenuContainer');
    const dropdownArrow = document.getElementById('dropdownArrow');

    function mockLogout(e) {
    e.preventDefault(); // Prevent default link action initially

    // 1. Show Confirmation Modal
    showModal(
        "Confirm Logout 🚪",
        "Are you sure you want to log out of your account?",
        "Yes, Logout", // Button text
        // 2. Button Action (This function performs the actual logout)
        () => {
            localStorage.removeItem('loggedInUser');
            // Close the current dropdown before redirecting
            document.getElementById('userDropdown')?.classList.remove("show"); 
            window.location.href = HOME_PAGE_HREF; // Redirect to home page
        }
    );
    }

    function toggleDropdown(e) {
        e.preventDefault();
        if (localStorage.getItem('loggedInUser')) {
            userDropdown.classList.toggle('show');
        } else {
            window.location.href = INITIAL_LOGIN_HREF;
        }
    }

    function checkLoginStatus() {
        const loggedInUsername = localStorage.getItem('loggedInUser');
        if (!userNameLink) return;

        const icon = userNameLink.querySelector('i[data-lucide="user"], i[data-lucide="user-check"]');
        userDropdown.innerHTML = "";

        if (loggedInUsername) {
            const displayName = loggedInUsername.split(" ")[0];
            userNameText.textContent = displayName;
            userNameLink.href = "javascript:void(0)";
            dropdownArrow.style.display = "inline";
            if (icon) icon.setAttribute('data-lucide', 'user-check');

            userNameLink.addEventListener("click", toggleDropdown);

            // Dropdown Menu
            const header = document.createElement("div");
            header.classList.add("dropdown-header");
            header.textContent = `Hello, ${displayName}!`;
            userDropdown.appendChild(header);

            const ordersLink = document.createElement("a");
            ordersLink.href = "orders.html";
            ordersLink.innerHTML = `<i data-lucide="package"></i> My Orders`;
            userDropdown.appendChild(ordersLink);

            const logoutLink = document.createElement("a");
            logoutLink.href = "javascript:void(0)";
            logoutLink.innerHTML = `<i data-lucide="log-out"></i> Logout`;
            logoutLink.addEventListener("click", mockLogout);
            userDropdown.appendChild(logoutLink);

        } else {
            userNameText.textContent = "Login";
            dropdownArrow.style.display = "none";
            if (icon) icon.setAttribute('data-lucide', 'user');
            userNameLink.href = INITIAL_LOGIN_HREF;
        }

        // Close dropdown when clicking outside
        window.addEventListener("click", (e) => {
            if (!userMenuContainer.contains(e.target)) {
                userDropdown.classList.remove("show");
            }
        });

        lucide.createIcons();
    }


    // -------------------------
    // --- CART SYSTEM ---
    // -------------------------
    function updateCartCount() {
        try {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const total = cart.reduce((a, b) => a + b.quantity, 0);

            const cartCount = document.getElementById('cart-count');
            if (cartCount) {
                cartCount.textContent = total;
                cartCount.style.display = total > 0 ? 'inline-block' : 'none';
            }
            return cart;

        } catch (e) {
            localStorage.removeItem('cart');
            return [];
        }
    }

    function addToCart(product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item.id === product.id);

        if (existing) existing.quantity++;
        else cart.push({ ...product, quantity: 1 });

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // -------------------------
    // --- INDEX PAGE ---
    // -------------------------
    function initIndexPage() {
        const searchBar = document.getElementById('searchBar');
        const searchResults = document.getElementById('searchResults');
        const productModal = document.getElementById('productModal');

        if (!searchBar) return;

        function showProductModal(productId) {
            const product = window.PRODUCT_LIST.find(p => p.id === productId);
            if (!product) return;

            document.getElementById("modalImage").src = product.image || DEFAULT_IMAGE_LARGE;
            document.getElementById("modalName").textContent = product.name;
            document.getElementById("modalPrice").textContent = `₹${product.price}`;
            document.getElementById("modalDescription").textContent = product.description;

            document.getElementById("modalAddToCartBtn").onclick = () => {
                addToCart(product);
                productModal.style.display = 'none';
            };

            document.getElementById("modalBuyNowBtn").onclick = () => {
                window.location.href = `checkout.html?id=${product.id}&amount=${product.price}&action=buynow`;
            };

            productModal.style.display = 'flex';
        }

        searchBar.addEventListener('input', () => {
            const q = searchBar.value.trim();
            if (!q) {
                searchResults.style.display = 'none';
                return;
            }
            const results = window.PRODUCT_LIST.filter(p =>
                p.name.toLowerCase().includes(q.toLowerCase())
            );

            searchResults.innerHTML = "";
            results.forEach(prod => {
                const div = document.createElement("div");
                div.classList.add("search-result-item");
                div.textContent = prod.name;
                div.onclick = () => showProductModal(prod.id);
                searchResults.appendChild(div);
            });

            searchResults.style.display = 'block';
        });
    }
function initProductPage() {
    const DEFAULT_IMAGE = 'https://via.placeholder.com/250x250?text=Product+Image';
    const products = window.PRODUCT_LIST;

    // DOM elements
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.getElementById('searchResults');
    const productModal = document.getElementById('productModal');

   
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    const modalBuyNowBtn = document.getElementById('modalBuyNowBtn');

    // 🔍 Search System
    function displaySearchResults(query) {
        const results = products.filter(p =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );

        searchResults.innerHTML = "";

        if (results.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        results.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("search-result-item");
    div.textContent = product.name;

    div.onclick = () => {
        searchBar.value = "";
        searchResults.style.display = "none";

        // 🔥 Close mobile hamburger menu
        const mobileMenu = document.querySelector(".links");
        mobileMenu.classList.remove("show");

        showProductModal(product.id);
    };

    searchResults.appendChild(div);
});


        searchResults.style.display = "block";
    }

    // 🛒 Product Modal (View Details)
    function showProductModal(productId) {
        const product = products.find(p => p.id == productId);
        if (!product) return;

        modalImage.src = product.image || DEFAULT_IMAGE;
        modalName.textContent = product.name;
        modalPrice.textContent = `₹${product.price}`;
        modalDescription.textContent = product.description;

        modalAddToCartBtn.onclick = () => {
            addToCart(product);
            hideProductModal();
        };

        modalBuyNowBtn.onclick = () => {
            window.location.href =
                `checkout.html?id=${product.id}&amount=${product.price}&action=buynow`;
        };

        productModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    

   document.addEventListener("click", function (e) {

    if (e.target.classList.contains("modal-close")) {
        hideProductModal();
    }

});

    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) hideProductModal();
    });

    // 🛒 Cart Count (uses global addToCart and updateCartCount)
    function localUpdateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const total = cart.reduce((a, b) => a + b.quantity, 0);

        const cartCount = document.getElementById("cart-count");
        if (cartCount) {
            cartCount.textContent = total;
            cartCount.style.display = total > 0 ? "inline-block" : "none";
        }
    }

    // 📦 Load Products on Page
    function loadProducts() {
        const container = document.getElementById("products");
        if (!container) return;

        container.innerHTML = "";

        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product");

            div.innerHTML = `
                <img src="${product.image}" class="product-img"
                     onerror="this.src='https://via.placeholder.com/250?text=No+Image'">

                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                </div>

                <button class="view-btn" data-id="${product.id}">View Details</button>
            `;

            container.appendChild(div);

            div.querySelector(".view-btn").addEventListener("click", () => {
                showProductModal(product.id);
            });
        });
    }

    // Search listener
    if (searchBar) {
        searchBar.addEventListener("input", () => {
            const q = searchBar.value.trim();
            q ? displaySearchResults(q) : searchResults.style.display = "none";
        });
    }

    // Ensure dropdown works on product page too
    checkLoginStatus();  // Add this to ensure dropdown updates
    lucide.createIcons(); // Initialize icons (including dropdown icon)

    // Init Page
    loadProducts();
    localUpdateCartCount();
}

// -------------------------
// --- CONTACT PAGE ---
// -------------------------
function initContactPage() {
    const form = document.getElementById("enquiryForm");
    const successModal = document.getElementById("successModal");
    const modalMessage = document.getElementById("modalMessage");

    if (!form || !successModal) return;

    const closeBtns = successModal.querySelectorAll(".modal-close, #modalOkBtn");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        modalMessage.textContent =
            `Thank you${name ? ", " + name : ""}! Your enquiry has been sent.`;

        successModal.style.display = "flex";
        form.reset();
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            successModal.style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target === successModal) {
            successModal.style.display = "none";
        }
    });
}
// -------------------------
// --- CART PAGE ---
// -------------------------
function initCartPage() {
    const cartContainer = document.getElementById("cart-container");
    if (!cartContainer) return;
    const checkoutBtn = document.getElementById("checkout-btn");

    function renderCart() {
        const cart = updateCartCount();

        if (!cart.length) {
            cartContainer.innerHTML = `
                <div id="empty-msg">
                    <p>Your cart is empty. <a href="product.html">Start shopping!</a></p>
                </div>
            `;
            checkoutBtn.style.display = "none"; // hide checkout button
            return;
        }

        checkoutBtn.style.display = "block"; // show checkout button

        let html = `
            <table>
                <thead><tr><th>Product</th><th>Name</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead>
                <tbody>
        `;

        cart.forEach(item => {
            const total = item.price * item.quantity;
            html += `
                <tr data-id="${item.id}">
                    <td><img src="${item.image || DEFAULT_IMAGE_SMALL}" width="50"></td>
                    <td>${item.name}</td>
                    <td>₹${item.price}</td>
                    <td>
                        <button class="dec" data-id="${item.id}">-</button>
                        ${item.quantity}
                        <button class="inc" data-id="${item.id}">+</button>
                    </td>
                    <td>₹${total}</td>
                    <td><button class="remove" data-id="${item.id}">Remove</button></td>
                </tr>
            `;
        });

        html += `</tbody></table>`;
        cartContainer.innerHTML = html;

        document.querySelectorAll(".inc").forEach(btn =>
            btn.onclick = () => updateQty(+btn.dataset.id, 1)
        );
        document.querySelectorAll(".dec").forEach(btn =>
            btn.onclick = () => updateQty(+btn.dataset.id, -1)
        );
        document.querySelectorAll(".remove").forEach(btn =>
            btn.onclick = () => removeItem(+btn.dataset.id)
        );
    }

    function updateQty(id, change) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const item = cart.find(i => i.id === id);
        if (!item) return;

        item.quantity += change;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.id !== id);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    function removeItem(id) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(i => i.id !== id);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    checkoutBtn.onclick = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length > 0) {
            window.location.href = "checkout.html";
        }
    };

    renderCart(); // 🔥 THIS WAS THE MISSING LINE
}

// -------------------------
// --- PAYMENT PAGE LOGIC ---
// -------------------------

function initPaymentPage() {

    const displayTotal = document.getElementById('displayTotal');
    const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const backToCheckoutLink = document.getElementById('backToCheckoutLink');
    const PLACEHOLDER_SHIPPING = 50;

    // -----------------------
    // Utility: Message Modal
    // -----------------------
    function showMessage(title, body, buttonText = 'Close', buttonAction = () => {
        document.getElementById('messageModal').style.display = 'none';
    }) {
        document.getElementById('messageModalTitle').textContent = title;
        document.getElementById('messageModalBody').textContent = body;

        const modalButton = document.querySelector('#messageModal .btn-confirm');
        modalButton.textContent = buttonText;
        modalButton.onclick = buttonAction;

        document.getElementById('messageModal').style.display = 'flex';
    }

    // -----------------------
    // Retrieve checkout items
    // -----------------------
    function getCheckoutItems() {
        const urlParams = new URLSearchParams(window.location.search);

        const action = urlParams.get('action');
        const productId = urlParams.get('id');
        const productPrice = urlParams.get('amount');

        // Quick Buy
        if (action === 'buynow' && productId && productPrice) {
            return {
                items: [{
                    id: productId,
                    name: `Product ID ${productId} (Quick Buy)`,
                    price: parseFloat(productPrice),
                    quantity: 1
                }],
                isBuyNow: true
            };
        }

        // Normal cart checkout
        return {
            items: JSON.parse(localStorage.getItem('cart')) || [],
            isBuyNow: false
        };
    }

    // -----------------------
    // Total Calculator
    // -----------------------
    function calculateOrderTotal(items) {
        if (!items.length) return { subtotal: 0, total: 0 };

        const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = PLACEHOLDER_SHIPPING;

        return { subtotal, total: subtotal + shipping };
    }

    // -----------------------
    // Payment Field Validation
    // -----------------------
    function validatePaymentFields(method) {
        const requiredFields = document.querySelectorAll(`[data-required="${method}"]`);
        let valid = true;

        requiredFields.forEach(field => {
            const errorEl = document.getElementById(`error-${field.id}`);
            let fieldValid = true;

            // Empty check
            if (!field.value.trim()) fieldValid = false;

            // Specific validation
            if (field.id === 'cardNumber' && field.value.replace(/\s/g, '').length !== 16) {
                fieldValid = false;
            }

            if (field.id === 'cardCvv' && (field.value.length !== 3 || isNaN(field.value))) {
                fieldValid = false;
            }

            if (field.id === 'upiId' && !/^[a-zA-Z0-9.\-]+@[a-zA-Z0-9.\-]+$/i.test(field.value)) {
                fieldValid = false;
            }

            // Show/hide errors
            if (!fieldValid) {
                valid = false;
                if (errorEl) errorEl.style.display = 'block';
            } else {
                if (errorEl) errorEl.style.display = 'none';
            }
        });

        return valid;
    }

    // -----------------------
    // Save Order Details
    // -----------------------
    function saveOrderDetails(total, method) {
        const shippingData = JSON.parse(localStorage.getItem('shippingData')) || {};

        const orderDetails = {
            total,
            subtotal: total - PLACEHOLDER_SHIPPING,
            method,
            email: shippingData.email || "customer@notfound.com"
        };

        localStorage.setItem('lastOrderDetails', JSON.stringify(orderDetails));
    }

    // -----------------------
    // Payment Handler
    // -----------------------
    window.handlePayment = function (event) {
        event.preventDefault();

        const { items, isBuyNow } = getCheckoutItems();
        const { total } = calculateOrderTotal(items);

        const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');

        if (!items.length) {
            showMessage(
                "Error",
                "Your cart is empty. Returning home.",
                "Go Home",
                () => window.location.href = "index.html"
            );
            return;
        }

        if (!selectedMethod) {
            showMessage("Payment Required", "Please select a payment method.");
            return;
        }

        const method = selectedMethod.value;
        let valid = (method === "cod") ? true : validatePaymentFields(method);

        if (!valid) {
            showMessage(
                "Missing Details",
                `Please fill in all required fields for ${method.toUpperCase()} payment.`
            );
            return;
        }

        // Save before clearing
        saveOrderDetails(total, method);

        // Clear cart only if normal checkout
        if (!isBuyNow) localStorage.removeItem('cart');

        const msg = method === 'cod'
            ? `Your order of ₹${total.toFixed(2)} is placed! Pay cash on delivery.`
            : `Payment of ₹${total.toFixed(2)} successful via ${method.toUpperCase()}.`;

        showMessage(
            "Order Confirmed! 🎉",
            msg,
            "View Order Details",
            () => window.location.href = "order-confirmation.html"
        );
    };

    // -----------------------
    // Page Initialization
    // -----------------------
    const { items } = getCheckoutItems();
    const { total } = calculateOrderTotal(items);

    displayTotal.textContent = `₹${total.toFixed(2)}`;
    backToCheckoutLink.href = "checkout.html" + window.location.search;

    // Block empty sessions
    if (total === 0) {
        showMessage(
            "Session Timeout",
            "Your cart is empty.",
            "Go to Products",
            () => window.location.href = "product.html"
        );
        confirmPaymentBtn.disabled = true;
        return;
    }

    // Update button when method changes
    paymentMethods.forEach(radio => {
        radio.addEventListener("change", () => {
            const method = radio.value;

            const label = {
                cod: "Confirm COD Order",
                upi: "Pay via UPI",
                card: "Pay by Card",
                netbanking: "Proceed to Bank Login"
            }[method] || "Confirm Order";

            confirmPaymentBtn.textContent = `${label} (₹${total.toFixed(2)})`;
        });
    });

    confirmPaymentBtn.textContent = `Confirm Order and Pay ₹${total.toFixed(2)}`;

    lucide.createIcons();
}

    // -------------------------
    // --- CHECKOUT PAGE ---
    // -------------------------
    function initCheckoutPage() {
        const shippingForm = document.getElementById("shippingForm");
        if (!shippingForm) return;

        const summarySubtotal = document.getElementById("summarySubtotal");
        const summaryShipping = document.getElementById("summaryShipping");
        const summaryTotal = document.getElementById("summaryTotal");

        function getCheckoutItems() {
            const params = new URLSearchParams(location.search);
            if (params.get("action") === "buynow") {
                return [{
                    id: params.get("id"),
                    price: +params.get("amount"),
                    name: "Quick Buy Product",
                    quantity: 1
                }];
            }
            return JSON.parse(localStorage.getItem("cart")) || [];
        }

        function renderSummary() {
            const cart = getCheckoutItems();
            let subtotal = 0;
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
            });

            summarySubtotal.textContent = `₹${subtotal}`;
            summaryShipping.textContent = `₹50`;
            summaryTotal.textContent = `₹${subtotal + 50}`;
        }

        window.handleCheckout = function (e) {
            e.preventDefault();
            const data = new FormData(shippingForm);

            localStorage.setItem(
                "shippingData",
                JSON.stringify(Object.fromEntries(data.entries()))
            );

            window.location.href = "payment.html" + location.search;
        };

        renderSummary();
    }


    // -------------------------
    // --- PAGE DETECTION ---
    // -------------------------
    const bodyId = document.body.id;

    if (bodyId === 'login') initLoginPage();
    if (bodyId === 'index') initIndexPage();
    if (bodyId === 'product') initProductPage();
    if (bodyId === 'cart') initCartPage();
    if (bodyId === "payment") initPaymentPage();
    if (bodyId === 'checkout') initCheckoutPage();
    if (bodyId === 'contact') initContactPage();



   // -------------------------
// --- ALWAYS RUN ---
// -------------------------

// Check if the modal element exists before trying to access its children
const messageModal = document.getElementById('messageModal'); 

if (messageModal) { // <-- SAFE CHECK ADDED HERE
    const modalCloseBtn = messageModal.querySelector('.modal-close');

    if (modalCloseBtn) {
        // 1. Close when 'X' is clicked
        modalCloseBtn.addEventListener('click', () => {
            messageModal.style.display = 'none';
        });
    }

    // 2. Close when user clicks anywhere on the grey overlay
    messageModal.addEventListener('click', (e) => {
        if (e.target === messageModal) {
            messageModal.style.display = 'none';
        }
    });
}
// ----------------------------------------------------
updateCartCount();
checkLoginStatus();
lucide.createIcons();

});document.addEventListener("DOMContentLoaded", function () {

    const shippingData = JSON.parse(localStorage.getItem("shippingData")) || {};
    const orderDetails = JSON.parse(localStorage.getItem("lastOrderDetails")) || {};

    console.log("Shipping:", shippingData);
    console.log("Order:", orderDetails);

    // Shipping
    if (document.getElementById("shippingName"))
        document.getElementById("shippingName").textContent =
            (shippingData.firstName || "") + " " + (shippingData.lastName || "");

    if (document.getElementById("shippingAddress1"))
        document.getElementById("shippingAddress1").textContent =
            shippingData.address || "";

    if (document.getElementById("shippingCityStateZip"))
        document.getElementById("shippingCityStateZip").textContent =
            (shippingData.city || "") + ", " +
            (shippingData.state || "") + " " +
            (shippingData.zip || "");

    if (document.getElementById("shippingCountry"))
        document.getElementById("shippingCountry").textContent =
            shippingData.country || "";

    if (document.getElementById("customerEmail"))
        document.getElementById("customerEmail").textContent =
            shippingData.email || "";

    // Payment + Totals
    if (document.getElementById("summarySubtotal"))
        document.getElementById("summarySubtotal").textContent =
            "₹" + (orderDetails.subtotal || 0).toFixed(2);

    if (document.getElementById("summaryShipping"))
        document.getElementById("summaryShipping").textContent = "₹50.00";

    if (document.getElementById("summaryTotal"))
        document.getElementById("summaryTotal").textContent =
            "₹" + (orderDetails.total || 0).toFixed(2);

    if (document.getElementById("paymentMethodUsed"))
        document.getElementById("paymentMethodUsed").textContent =
            orderDetails.method ? orderDetails.method.toUpperCase() : "";
});
document.addEventListener("DOMContentLoaded", function () {

    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

});
function hideProductModal() {
    const modal = document.getElementById("productModal");
    const navLinks = document.getElementById("navLinks");

    if (modal) {
        modal.style.display = "none";
    }

    if (navLinks) {
        navLinks.classList.remove("show"); // 🔥 close hamburger
    }

    document.body.style.overflow = "auto";
}
