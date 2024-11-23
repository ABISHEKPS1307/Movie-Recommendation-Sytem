import pandas as pd

# Load the CSV file
df = pd.read_csv('imdb_top_1000.csv')

# Convert to JSON
df.to_json('movies.json', orient='records', lines=False)
