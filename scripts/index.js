$(function() {
    $('.one').hide();
    $('.two').hide();

    $('#btn-two').click(function() {
        $('.one').slideDown();
        $('.two').show(1000);
    });
    $('#btn-one').click(function() {
        $('.one').slideUp();
        $('.two').hide(800);
    });

    // FORM
    $('#SubmitBtn').mouseover(function() {
         let Firstname = $('#Firstname').val();
         if(Firstname === ""){alert("Firstname cannot be empty")}
         let Lastname = $('#Lastname').val();
         if(Lastname === ""){alert("Lastname cannot be empty")}
         let Email = $('#Email').val();
         if(Email === ""){alert("Email cannot be empty")}
         let Password = $('#Password').val();
         if(Password === ""){alert("Password cannot be empty")}
         let Address = $('#Address').val();
         if(Address === ""){alert("Address cannot be empty")}
         let select = $('#select').val();
         if(select === ""){alert("select cannot be empty")}
         let phone = $('#phone').val();
         if(phone === ""){alert("phone cannot be empty")}
    });

    $('#SubmitBtn').click(function() {
        let Firstname = $("#Firstname").val();
        let Lastname = $("#Lastname").val();
        let Email = $("#Email").val();
        let Password = $("#Password").val();
        let Address = $("#Address").val();
        let select = $("#select").val();
        let phone = $("#phone").val();

        // alert("Firstname: " + Firstname + "\nLastname: " + Lastname + "\nEmail: " + Email + 
        //     "\nPassword: " + Password + "\nAddress: " + Address + "\nSelect: " + select + "\nphone: " + phone);
        // return false; // to prevent form from submitting
 
   });

   $('#LoginBtn').mouseover(function() {
    let Fullname = $('#Fullname').val();
    if(Fullname === ""){alert("Fullname cannot be empty")}
    let Email = $('#Email').val();
    if(Email === ""){alert("Email cannot be empty")}
    let Password = $('#Password').val();
    if(Password === ""){alert("Password cannot be empty")}
    let phone = $('#phone').val();
    if(phone === ""){alert("phone cannot be empty")}
    });

    $('#LoginBtn').click(function() {
    let Fullname = $("#Fullname").val();    
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    let phone = $("#phone").val();

    alert("Fullname: " + Fullname + "\nEmail: " + Email + 
        "\nPassword: " + Password + "\nphone: " + phone);
    return false; // to prevent form from submitting

    });

    // CAR MODAL GRID
    for (let i = 1; i <= 6 ; i++) {
        $('#cardiv_'+i).click(function(){
            let car_img = $('#img_'+i).attr('src');
             $('#modalImg').attr('src', car_img);
             let car_name = $('#name_'+i).text();
             $('#modalCarName').html(car_name);
             let car_price = $('#price_'+i).text();
             $('#modalCarPrice').html("Price" + car_price);
         }); 
    }
    
    $('#sun').hide();
    $('#moon').click(function(){
        $('#sun').show();
        $('#moon').hide();

        $('.main').addClass('main-dark');
        $('.all').addClass('all-dark-text');
        $('.left-menu').addClass('left-menu-dark');
        $('.hero').addClass('hero-dark');
        $('.car-div').addClass('car-div-dark');
    })

    $('#sun').click(function(){
        $('#moon').show();
        $('#sun').hide();

        $('.main').removeClass('main-dark');
        $('.all').removeClass('all-dark-text');
        $('.left-menu').removeClass('left-menu-dark');
        $('.hero').removeClass('hero-dark');
        $('.car-div').removeClass('car-div-dark');
    })
});





// light and dark modes
    