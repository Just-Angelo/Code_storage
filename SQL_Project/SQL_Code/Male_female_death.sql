-- This code looks at the sum of global suicide rates in 2016 , 2015, 2010
-- and 200 then groups it by sex. The results show globally male deaths
-- due to suicide are three times higher than female

select sex, sum("2016") as "2016", sum("2015") as "2015",
sum("2010") as "2010", sum("2000") as "2000"
from suicide_country_year
group by sex


