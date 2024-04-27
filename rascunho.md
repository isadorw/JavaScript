- 1015 | 10h41 até 23h
    entrada
        1.0 7.0 > Linha 1: Dois valores de ponto flutuante x1 e y1
        5.0 9.0 > Linha 2: Dois valores de ponto flutuante x2 e y2
    processamento
        distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))

- 1016 | 23h08 até 23h15
    entrada > distância (em Km)
        30 
        110
        7
    saída
        60 minutos > quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.
    processamento
        X > v_constante de 60 Km/h
        Y > v_constante de 90 Km/h
            Em 60 minutos o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos (60 min / 30 = 2).
            90 - 60 = 30km

- 1017 | 23h18 até 23h24
    !! automóvel faz 12 KM/L

    entrada
        10 > tempo gasto na viagem (em horas)
        85 > velocidade média durante a mesma (em km/h)

    saída
        70.833 > quantidade de litros necessária para realizar a viagem

    cálculo
        (vel_media / l_automovel) * t_gasto
        85 / 12

