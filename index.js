cronometro = (() => {

    let temporizador = document.getElementById('temporizador')
    let temporizadorString = temporizador.textContent
    let temporizadorArray = temporizadorString.split(':')
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
            return iniciar
        }
    }

    function parar () {
        temporizadorParado = true
        clearInterval(iniciar)
    }

    function zerar () {
        
        [hh, mm, ss] = temporizadorArray
        temporizador.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
        clearInterval(iniciar)
        temporizadorParado = true
    }

    return {
        iniciar,
        parar,
        zerar
    }
})();