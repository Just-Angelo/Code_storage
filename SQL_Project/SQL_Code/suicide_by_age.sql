-- This gets the average suicide rates by age and sex for different years
-- rounded to 2 decimal places.

select sex, round(avg("80+"), 2) as "80+", round(avg("70 to 79"), 2) as "70-79",
round(avg("60 to 69"), 2) as "60-69", round(avg("50 to 59"), 2) as "50-59"
,round(avg("40 to 49"), 2) as "40-49", round(avg("30 to 39"), 2) as "30-39",
round(avg("20 to 29"), 2) as "20-29", round(avg("10 to 19"), 2) as "10-19"
from suicide_rate_by_age
group by sex