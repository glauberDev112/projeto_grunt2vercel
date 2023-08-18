$(document).ready(function () {
    $('#formulario').submit(function (e) {
        e.preventDefault()
        $('#num').text(parseInt(parseFloat($('#num_max').val())*Math.random()))
        $('.returnSet').attr('escondido','false')
    })
});