$(document).ready(function() {
    $('#button-inicial').click(function() {
        $('form').slideDown();
    })

    $('#button-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const NovaTarefa = $("#Tarefa").val();
        const Tarefa = $(`<li>${NovaTarefa}</li>`).on("click", function () {
            $(this).removeClass("destacado");
            $(this).addClass("destacado");
        });

        $(Tarefa).appendTo('ul');
        $('#Tarefa').val('');
        $(Tarefa).on('click');
    })
});