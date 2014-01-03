patients = Patient.create([
{first_name: 'test first', last_name: 'test last'},
{first_name: 'test first 2', last_name: 'test last 2'}
])

providers = Provider.create([
{first_name: 'test first', last_name: 'test last', title: 'MD'}
])

results = Result.create([
{patient_id: 1, result: 1.5, date: '13/12/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.2, date: '13/11/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.3, date: '13/10/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.1, date: '13/9/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.0, date: '13/8/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.3, date: '13/7/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.5, date: '13/6/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.2, date: '13/5/2013 0:00', result_type: 'KT/V'},
{patient_id: 1, result: 1.2, date: '13/11/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.3, date: '13/10/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.1, date: '13/9/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.0, date: '13/8/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.3, date: '13/7/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.5, date: '13/6/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.2, date: '13/5/2013 0:00', result_type: 'Creatinine'},
{patient_id: 1, result: 1.3, date: '13/10/2013 0:00', result_type: 'eGFR'},
{patient_id: 1, result: 1.1, date: '13/9/2013 0:00', result_type: 'eGFR'},
{patient_id: 1, result: 1.0, date: '13/8/2013 0:00', result_type: 'eGFR'},
{patient_id: 1, result: 1.3, date: '13/7/2013 0:00', result_type: 'eGFR'},
{patient_id: 1, result: 1.5, date: '13/6/2013 0:00', result_type: 'eGFR'},
{patient_id: 1, result: 1.2, date: '13/5/2013 0:00', result_type: 'eGFR'},
{patient_id: 1, result: 1.3, date: '13/10/2013 0:00', result_type: 'iPTH'},
{patient_id: 1, result: 1.1, date: '13/9/2013 0:00', result_type: 'iPTH'},
{patient_id: 1, result: 1.0, date: '13/8/2013 0:00', result_type: 'iPTH'},
{patient_id: 1, result: 1.3, date: '13/7/2013 0:00', result_type: 'iPTH'},
{patient_id: 1, result: 1.5, date: '13/6/2013 0:00', result_type: 'iPTH'},
{patient_id: 1, result: 1.2, date: '13/5/2013 0:00', result_type: 'iPTH'},
{patient_id: 1, result: 1.3, date: '13/10/2013 0:00', result_type: 'Calcium'},
{patient_id: 1, result: 1.1, date: '13/9/2013 0:00', result_type: 'Calcium'},
{patient_id: 1, result: 1.0, date: '13/8/2013 0:00', result_type: 'Calcium'},
{patient_id: 1, result: 1.3, date: '13/7/2013 0:00', result_type: 'Calcium'},
{patient_id: 1, result: 1.5, date: '13/6/2013 0:00', result_type: 'Calcium'},
{patient_id: 1, result: 1.2, date: '13/5/2013 0:00', result_type: 'Calcium'},
{patient_id: 1, result: 1.3, date: '13/10/2013 0:00', result_type: 'Vitamin D'},
{patient_id: 1, result: 1.1, date: '13/9/2013 0:00', result_type: 'Vitamin D'},
{patient_id: 1, result: 1.0, date: '13/8/2013 0:00', result_type: 'Vitamin D'},
{patient_id: 1, result: 1.3, date: '13/7/2013 0:00', result_type: 'Vitamin D'},
{patient_id: 1, result: 1.5, date: '13/6/2013 0:00', result_type: 'Vitamin D'},
{patient_id: 1, result: 1.2, date: '13/5/2013 0:00', result_type: 'Vitamin D'},
{patient_id: 2, result: 1.5, date: '13/12/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.2, date: '13/11/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.3, date: '13/10/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.1, date: '13/9/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.0, date: '13/8/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.3, date: '13/7/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.5, date: '13/6/2013 0:00', result_type: 'KT/V'},
{patient_id: 2, result: 1.2, date: '13/5/2013 0:00', result_type: 'KT/V'}
])