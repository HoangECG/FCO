import requests

def get_google_sheet_data(spreadsheet_id,sheet_name, api_key):
    # Construct the URL for the Google Sheets API
    url = f'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/{sheet_name}!A1:B?alt=json&key={api_key}'

    try:
        # Make a GET request to retrieve data from the Google Sheets API
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Parse the JSON response
        data = response.json()
        return data

    except requests.exceptions.RequestException as e:
        # Handle any errors that occur during the request
        print(f"An error occurred: {e}")
        return None


# configurations
spreadsheet_id = '1rdSU9mEy7yHltRfwvLFlllAbxhW_yvJyNcBFJxMv2gA'
api_key = 'AIzaSyARx2UnEZ_gUra4BNBc6_xGYkTX-7TvWDY'
sheet_name = "data"

sheet_data = get_google_sheet_data(spreadsheet_id,sheet_name, api_key)

if sheet_data:
    datapull = {}
    for i in sheet_data['values']:
        datapull[i[0]] = i[1]
    print(datapull)
else:
    print("Failed to fetch data from Google Sheets API.")