const calculo = require('./soma')

test('Soma dos dois números', ()=>{


    expect(calculo.soma(10,20)).toBe(30)

})