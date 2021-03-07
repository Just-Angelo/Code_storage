import pandas as pd
import csv
F = open("real_estate.csv", "r")
Lines = F.readlines()
row_counter = 0

with open("real_estate.csv", "w") as F:
    for rows in Lines:
        if 'NA' not in rows:
            F.write(rows)
        if 'NA' in rows:
            print('indice' + row_counter + "removed")
        row_counter += 1  
    F.close()
    
F = pd.read_csv("real_estate.csv")
keep_col = ['age', 'nearestMRT', 'nConvenience']
new_F = F[keep_col]
new_F.to_csv("real_estate.csv", index = False)
     
df = pd.read_csv("real_estate.csv")
df['age'] = ((df['age'] - min(df['age']))/(max(df['age']) - min(df['age'])))
df['nearestMRT'] = ((df['nearestMRT'] - min(df['nearestMRT']))/(max(df['nearestMRT']) - min(df['nearestMRT'])))
df['nConvenience'] = ((df['nConvenience'] - min(df['nConvenience']))/(max(df['nConvenience']) - min(df['nConvenience'])))
df.to_csv("real_estate.csv", index = False)




row_counter = 0
F = open("real_estate.csv", "r")
for rows in F:
    row_counter += 1
print(row_counter)

