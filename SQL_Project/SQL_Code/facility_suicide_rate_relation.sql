
-- First we will take a look at countries with the most facilities
-- and least facilities to see if there is any obvious differences.

-- we will select the total facilities and replace nulls with zeros and
-- then compare it with suicide rates.

select f.country, f.year, (coalesce(f.mental_hospital, 0) 
+ coalesce(f.health_units, 0) + coalesce(f.out_patient_units, 0) 
+ coalesce(f.day_treatment, 0) 
+ coalesce(f.residential_facilities, 0)) as total_facilities, 
scy."2016", scy.sex
from facilities as f inner join suicide_country_year as scy
on f.country = scy.country
where scy.sex = ' Both sexes'
order by total_facilities ASC
