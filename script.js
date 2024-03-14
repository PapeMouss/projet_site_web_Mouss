document.addEventListener('DOMContentLoaded', function () {
    // Gestion de l'ajout au panier
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartCounter = document.querySelector('.cart-counter');
    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cartItems++;
            cartCounter.innerText = cartItems;
        });
    });

    // Gestion de l'ajout aux favoris
    const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites-button');
    const favoritesCounter = document.querySelector('.favorites-counter');
    let favoritesCount = 0;

    addToFavoritesButtons.forEach(button => {
        button.addEventListener('click', function () {
            favoritesCount++;
            favoritesCounter.innerText = favoritesCount;
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const loginText = document.querySelector("#loginModal .title-text .login");
    const loginForm = document.querySelector("#loginModal .modal-content form");
    const loginBtn = document.querySelector("#loginModal .modal-content label.login");
    const signupBtn = document.querySelector("#loginModal .modal-content label.signup");
    const signupLink = document.querySelector("#loginModal .modal-content .signup-link a");

    signupBtn.addEventListener("click", () => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    });

    loginBtn.addEventListener("click", () => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
    });

    signupLink.addEventListener("click", (e) => {
        e.preventDefault(); // Pour empêcher le comportement par défaut du lien
        signupBtn.click();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez tous les boutons "Ajouter au panier"
    var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Augmentez le compteur de panier
            incrementCartCounter();
        });
    });

    // Sélectionnez tous les boutons "Ajouter aux favoris"
    var addToFavoritesButtons = document.querySelectorAll('.add-to-favorites-button');
    addToFavoritesButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Augmentez le compteur de favoris
            incrementFavoritesCounter();
        });
    });

    // Fonction pour augmenter le compteur de panier
    function incrementCartCounter() {
        var cartCounter = document.querySelector('.cart-counter');
        var count = parseInt(cartCounter.innerText);
        cartCounter.innerText = count + 1;
    }

    // Fonction pour augmenter le compteur de favoris
    function incrementFavoritesCounter() {
        var favoritesCounter = document.querySelector('.favorites-counter');
        var count = parseInt(favoritesCounter.innerText);
        favoritesCounter.innerText = count + 1;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez l'icône de panier
    var cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', function() {
        // Redirigez l'utilisateur vers la page du panier
        window.location.href = 'cart.html';
    });

    // Sélectionnez l'icône de favoris
    var favoritesIcon = document.getElementById('favorites-icon');
    favoritesIcon.addEventListener('click', function() {
        // Redirigez l'utilisateur vers la page des favoris
        window.location.href = 'favorites.html';
    });
});

//#######################################

document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les articles ajoutés au panier depuis le stockage local
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Sélectionner l'élément HTML où afficher les articles du panier
    const cartItemsContainer = document.getElementById('cart-items');

    // Fonction pour afficher les articles dans le panier
    function displayCartItems() {
        // Effacer le contenu précédent du conteneur
        cartItemsContainer.innerHTML = '';

        // Parcourir tous les articles dans le panier
        cartItems.forEach(item => {
            // Créer un élément pour chaque article
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');

            // Remplir l'élément avec les détails de l'article
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>Prix: ${item.price} FCFA</p>
                    <button class="remove-item-button">Supprimer</button>
                </div>
            `;

            // Ajouter l'article au conteneur du panier
            cartItemsContainer.appendChild(cartItemElement);

            // Ajouter un gestionnaire d'événement pour le bouton de suppression
            const removeButton = cartItemElement.querySelector('.remove-item-button');
            removeButton.addEventListener('click', function() {
                // Supprimer l'article du panier
                removeItemFromCart(item);
                // Mettre à jour l'affichage du panier
                displayCartItems();
            });
        });
    }

    // Fonction pour supprimer un article du panier
    function removeItemFromCart(item) {
        // Trouver l'index de l'article dans le panier
        const index = cartItems.indexOf(item);
        if (index !== -1) {
            // Supprimer l'article du panier
            cartItems.splice(index, 1);
            // Mettre à jour le stockage local avec le nouveau panier
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }

    // Appeler la fonction pour afficher les articles dans le panier
    displayCartItems();
});




document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les articles ajoutés aux favoris depuis le stockage local
    let favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];

    // Sélectionner l'élément HTML où afficher les articles favoris
    const favoritesContainer = document.getElementById('favorites-items');

    // Fonction pour afficher les articles favoris
    function displayFavoriteItems() {
        // Effacer le contenu précédent du conteneur
        favoritesContainer.innerHTML = '';

        // Parcourir tous les articles favoris
        favoriteItems.forEach(item => {
            // Créer un élément pour chaque article
            const favoriteItemElement = document.createElement('div');
            favoriteItemElement.classList.add('favorite-item');

            // Remplir l'élément avec les détails de l'article
            favoriteItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>Prix: ${item.price} FCFA</p>
                    <button class="remove-item-button">Supprimer</button>
                </div>
            `;

            // Ajouter l'article au conteneur des favoris
            favoritesContainer.appendChild(favoriteItemElement);

            // Ajouter un gestionnaire d'événement pour le bouton de suppression
            const removeButton = favoriteItemElement.querySelector('.remove-item-button');
            removeButton.addEventListener('click', function() {
                // Supprimer l'article des favoris
                removeItemFromFavorites(item);
                // Mettre à jour l'affichage des favoris
                displayFavoriteItems();
            });
        });
    }

    // Fonction pour supprimer un article des favoris
    function removeItemFromFavorites(item) {
        // Trouver l'index de l'article dans les favoris
        const index = favoriteItems.indexOf(item);
        if (index !== -1) {
            // Supprimer l'article des favoris
            favoriteItems.splice(index, 1);
            // Mettre à jour le stockage local avec les nouveaux favoris
            localStorage.setItem('favorites', JSON.stringify(favoriteItems));
        }
    }

    // Appeler la fonction pour afficher les articles favoris
    displayFavoriteItems();
});
