-- Here we select the countries , their gdp per capita and suicide rates 
-- in 2016. Then we order it from biggest to smallest and see if there
-- is any obvious difference.

select gdp.country, gdp.gdp_per_capita, scy."2016" as suicide_rate_2016
from gdp_per_capita as gdp inner join suicide_country_year as scy
on (gdp.country = scy.country)
where scy.sex = ' Both sexes'
order by gdp.gdp_per_capita DESC