# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#this will add allthe locations that mike simon created. hacking the currently unused "value" field to distinguish mike simon's locations and some randomly generated zip codes (2&3)
#May try to use records with a value of 3 to indicate prescriptions that are not flu related (down the road)
#also added fake time to the prescriptions
ktvresults = Ktvresult.create([
{patient_id: 1, ktv_result: 1.5, ktv_date: '13/12/2013 0:00', predicted: 'yes', zemplar_usage:'no'},
{patient_id: 1, ktv_result: 1.2, ktv_date: '13/11/2013 0:00', predicted: 'yes', zemplar_usage:'no'},
{patient_id: 1, ktv_result: 1.3, ktv_date: '13/10/2013 0:00', predicted: 'yes', zemplar_usage:'yes'},
{patient_id: 1, ktv_result: 1.1, ktv_date: '13/9/2013 0:00', predicted: 'yes', zemplar_usage:'yes'},
{patient_id: 1, ktv_result: 1.0, ktv_date: '13/8/2013 0:00', predicted: 'no', zemplar_usage:'no'},
{patient_id: 1, ktv_result: 1.3, ktv_date: '13/7/2013 0:00', predicted: 'no', zemplar_usage:'no'},
{patient_id: 1, ktv_result: 1.5, ktv_date: '13/6/2013 0:00', predicted: 'no', zemplar_usage:'yes'},
{patient_id: 1, ktv_result: 1.2, ktv_date: '13/5/2013 0:00', predicted: 'no', zemplar_usage:'yes'},
{patient_id: 2, ktv_result: 1.5, ktv_date: '13/12/2013 0:00', predicted: 'yes', zemplar_usage:'no'},
{patient_id: 2, ktv_result: 1.2, ktv_date: '13/11/2013 0:00', predicted: 'yes', zemplar_usage:'no'},
{patient_id: 2, ktv_result: 1.3, ktv_date: '13/10/2013 0:00', predicted: 'yes', zemplar_usage:'yes'},
{patient_id: 2, ktv_result: 1.1, ktv_date: '13/9/2013 0:00', predicted: 'yes', zemplar_usage:'yes'},
{patient_id: 2, ktv_result: 1.0, ktv_date: '13/8/2013 0:00', predicted: 'no', zemplar_usage:'no'},
{patient_id: 2, ktv_result: 1.3, ktv_date: '13/7/2013 0:00', predicted: 'no', zemplar_usage:'no'},
{patient_id: 2, ktv_result: 1.5, ktv_date: '13/6/2013 0:00', predicted: 'no', zemplar_usage:'yes'},
{patient_id: 2, ktv_result: 1.2, ktv_date: '13/5/2013 0:00', predicted: 'no', zemplar_usage:'yes'}
])