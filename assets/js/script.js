//Al ingresar valores en las barras de búsqueda no debe generar un cambio visual, pero al momento de hacer 
//clic en las lupas, cambiar color input y texto manipulando el DOM

$(function () {
    $('#inputEstaTienda').on({
        click: function () {
            limpiar();
            $('#estaTienda').addClass('bg-success');
            $('#estaTienda').children().css('color', 'green');
        },
    })

    $('#inputOtrasTiendas').on({
        click: function () {
            limpiar();
            $('#otrasTiendas').addClass('bg-warning');
            $('#otrasTiendas').children().css('color', 'yellow');
        }
    })

    $('#inputOnline').on({
        click: function () {
            limpiar();
            $('#online').addClass('bg-primary');
            $('#online').children().css('color', 'blue');
        }
    })


    function limpiar() {
        $('#estaTienda').removeClass('bg-success').children().css("color", "#E35865");
        $('#otrasTiendas').removeClass('bg-warning').children().css("color", "#E35865")
        $('#online').removeClass('bg-primary').children().css("color", "#E35865")
    }
});

