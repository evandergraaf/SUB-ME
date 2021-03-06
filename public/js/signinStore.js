// js/signinStore.js
/** JS for Company log in
*Ean Vandergraaf, Laura Pareja,
*Carter Williams, Seth Workman
*KC Fed Code-A-Thon - Covid Project
*10/25/2020
*/
$(function() {

    $("#loginStoreForm").submit((e) => {
        e.preventDefault();
        $.post("api/store/login", {
            store_email: $("#email").val().toLowerCase(),
            password: $("#password").val().toLowerCase(),
        }, function (data, status) {
            window.localStorage.setItem("token", data.token);
            $(".card").slideUp();
                setTimeout(function(){
                    window.location.href = "/homeCompanies.html";
                }, 1000);
        });

    });
})