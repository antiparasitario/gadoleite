$(document).ready(function () {
    $("#contactform").submit(function (e) {
        e.preventDefault();

        var name = $("#name");
        var mobile = $("#mobile");
        var email = $("#email");
        var origem = $("#origem");
        
        
        if (name.val() == "") {
            name.closest(".form-group").addClass("has-error");
            name.focus();
            return false;
        } else {
            name.closest(".form-group").removeClass("has-error").addClass("has-success");
        } if (mobile.val() == "") {
            mobile.closest(".form-group").addClass("has-error");
            mobile.focus();
            return false;
        } if (email.val() == "" && origem.val() === "EMAIL") {
            email.closest(".form-group").addClass("has-error");
            email.focus();
            return false;
        }

        console.log('foi');
        var dataString = "Nome=" + name.val() + " Telefone=" + mobile.val() + " ORIGEM=" + origem.val();
        if (origem.val() === "EMAIL") {
            dataString = dataString + " EMAIL=" + email.val();
        }
            

        $(".loading").fadeIn("slow").html("<p><strong>Enviando...</strong></p>");
        $('input[type="submit"]').prop('disabled', true);

        ga('send', {
            hitType: 'event',
            eventCategory: 'Contato',
            eventAction: 'Contato',
            eventLabel: 'Contato'
        });

        $.ajax({
            url: "https://formspree.io/contato@antiparasitario.com.br",
            method: "POST",
            data: { message: dataString },
            dataType: "json",
            success: function (data) {
                $('.loading').fadeIn('slow').html('<p class="text-success"><strong>Recebemos seu nome e telefone. Entraremos em contato em muito breve.</strong></p>'); return false;
            },
        });

    });
})

