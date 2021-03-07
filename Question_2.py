import pandas as pd
import csv
import math 

row_counter = 0
F = open("real_estate.csv", "r")
for rows in F:
    row_counter += 1
F.close()
    
F = pd.read_csv("real_estate.csv", nrows = math.ceil(row_counter/2))
F.to_csv("training.csv", index = False)

F = pd.read_csv("real_estate.csv", skiprows = range(1,math.ceil(row_counter/2)))
F.to_csv("test.csv", index = False)


row_counter = 0
F = open("training.csv", "r")
for rows in F:
    row_counter += 1
F.close()
F = open("training.csv", "r")
read = csv.reader(F)
rows = list(read)
print("training line 1:" + str(rows[1]))
print("training last line:" + str(rows[row_counter - 1]))

row_counter = 0
F = open("test.csv", "r")
for rows in F:
    row_counter += 1
F.close()
F = open("test.csv", "r")
read = csv.reader(F)
rows = list(read)
print("test line 1:" + str(rows[1]))
print("test last line:" + str(rows[row_counter - 1]))




