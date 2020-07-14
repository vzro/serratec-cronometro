cronometro = (() => {
    let temporizador = document.getElementById('temporizador')
    let temporizadorArray = temporizador.textContent.split(':')
    let temporizadorParado = true
    let [hh, mm, ss] = temporizadorArray

    function iniciar () {
        if (temporizadorParado) {
            temporizadorParado = false
            iniciar = setInterval( () => {
                ss = parseInt(ss) + 1
                temporizador.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
                if (parseInt(ss) > 59) {
                    ss = '00'
                    mm = parseInt(mm) + 1
                    temporizador.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
                } else if (parseInt(mm) > 59) {
                        mm = '00'
                        hh = parseInt(hh) + 1
                        temporizador.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
                    }
                }
            , 1000)
        }
    }

    function parar () {
        temporizadorParado = true
        clearInterval(iniciar)
    }

    function zerar () {
        [hh, mm, ss] = temporizadorArray
        temporizador.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
        temporizadorParado = true
        clearInterval(iniciar)
    }

    return {
        iniciar,
        parar,
        zerar
    }
})();