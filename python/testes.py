# import tradingeconomics as te
# te.login('ff118324a9784dd:uf05cp73mzkte9u')
# x = te.getMarketsSearch(country='mexico')
# print (x)

import tradingeconomics as te
te.login('ff118324a9784dd:uf05cp73mzkte9u')
x = te.getCmtCountryFilterByType(country1 ='mexico', country2 ='sweden',
 type='export')
print (x)

# te.login('key:ff118324a9784dd:bsbyb0uhw8yhf11')
# x = te.getIndicatorData(country=['mexico', 'sweden'])