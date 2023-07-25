document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementById('formulario').addEventListener('submit',function (e) {
        const n = parseInt(document.getElementById('num_max').innerText)
        let i = Math.random()*n
        alert(`nomero sorteado: ${parseInt(i)}`)
        alert('uoiuopuoaiud')

    })
})