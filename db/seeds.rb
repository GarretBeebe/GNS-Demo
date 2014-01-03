patient1 = Patient.create(first_name: 'test first', last_name: 'test last')

patient2 = Patient.create(first_name: 'test first 2', last_name: 'test last 2')

provider1 = Provider.create(first_name: 'test first', last_name: 'test last', title: 'MD')

patient1.result.create([
{ result: 1.5, date: '13/12/2013 0:00', result_type: 'KT/V'},
{ result: 1.2, date: '13/11/2013 0:00', result_type: 'KT/V'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'KT/V'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'KT/V'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'KT/V'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'KT/V'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'KT/V'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'KT/V'},
{ result: 1.2, date: '13/11/2013 0:00', result_type: 'Creatinine'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'Creatinine'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'Creatinine'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'Creatinine'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'Creatinine'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'Creatinine'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'Creatinine'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'eGFR'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'eGFR'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'eGFR'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'eGFR'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'eGFR'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'eGFR'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'iPTH'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'iPTH'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'iPTH'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'iPTH'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'iPTH'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'iPTH'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'Calcium'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'Calcium'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'Calcium'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'Calcium'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'Calcium'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'Calcium'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'Vitamin D'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'Vitamin D'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'Vitamin D'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'Vitamin D'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'Vitamin D'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'Vitamin D'}
])

patient2.result.create([
{ result: 1.5, date: '13/12/2013 0:00', result_type: 'KT/V'},
{ result: 1.2, date: '13/11/2013 0:00', result_type: 'KT/V'},
{ result: 1.3, date: '13/10/2013 0:00', result_type: 'KT/V'},
{ result: 1.1, date: '13/9/2013 0:00', result_type: 'KT/V'},
{ result: 1.0, date: '13/8/2013 0:00', result_type: 'KT/V'},
{ result: 1.3, date: '13/7/2013 0:00', result_type: 'KT/V'},
{ result: 1.5, date: '13/6/2013 0:00', result_type: 'KT/V'},
{ result: 1.2, date: '13/5/2013 0:00', result_type: 'KT/V'}
])
