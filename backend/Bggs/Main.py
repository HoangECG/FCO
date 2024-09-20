from __future__ import print_function

import os.path
import httplib2
from oauth2client import GOOGLE_REVOKE_URI, GOOGLE_TOKEN_URI, client
from datetime import *
from requests import *
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

# cmd config.
# SHEET_NAME = input('Sheet name: ')
# SAMPLE_SPREADSHEET_ID = input('Sheet ID: ')
# BOT_TOKEN = input('Telegram BOT token: ')
# print('DONE!')

# config test
SHEET_NAME = 'layout'
MASTER_DATA_USER = '1rdSU9mEy7yHltRfwvLFlllAbxhW_yvJyNcBFJxMv2gA'
dayPrev = {'dayPrev':'12/09/24'}


SAMPLE_RANGE_NAME = f'{SHEET_NAME}!A2:E'
# time now
def time(format):
    if (format == 'dmy'):
        today = date.today()
        day = today.strftime("%d/%m/%y")
        return day
    if (format == 'y'):
        today = date.today()
        day = today.strftime("%y")
        return str(day)


# google sheet code
creds = None
if os.path.exists('token.json'):
    creds = Credentials.from_authorized_user_file('token.json', SCOPES)
# If there are no (valid) credentials available, let the user log in.
if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file(
            'credentials.json', SCOPES)
        creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open('token.json', 'w') as token:
        token.write(creds.to_json())
try:
    service = build('sheets', 'v4', credentials=creds)
    # Call the Sheets API
    sheet = service.spreadsheets()
except HttpError as err:
    print(err)


def checkDayToken():
    start_date = dayPrev['dayPrev']
    end_date = time('dmy')
    s1 = datetime.strptime(start_date, "%d/%m/%y")
    e2 = datetime.strptime(end_date, "%d/%m/%y")
    if (str(e2 - s1)[0:1] == 6):
        CLIENT_ID = '668496857441-2gc59kjo5tu37seou2i3tvn2tggii53c.apps.googleusercontent.com'
        CLIENT_SECRET = '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'
        REFRESH_TOKEN = '1//0gnfoN6vr0BoSCgYIARAAGBASNwF-L9IrbUulMCE_UjY3zbfRiw0ZiXL4SmyU0eD7lxNVKueZIbyWTuG9BFYZesHCspS-iArIV84'

        credentials = client.OAuth2Credentials(
            access_token=None,  # set access_token to None since we use a refresh token
            client_id=CLIENT_ID,
            client_secret=CLIENT_SECRET,
            refresh_token=REFRESH_TOKEN,
            token_expiry=None,
            token_uri=GOOGLE_TOKEN_URI,
            user_agent=None,
            revoke_uri=GOOGLE_REVOKE_URI)

        credentials.refresh(httplib2.Http())  # refresh the access token (optional)
        print(credentials.to_json())
        http = credentials.authorize(httplib2.Http())  # apply the credentials
    else:
        pass

# get sheet id from master sheet



def main():
    try:
        result = sheet.values().get(spreadsheetId=MASTER_DATA_USER,range=SAMPLE_RANGE_NAME).execute()
        values = result.get('values', [])
        for i in values:
            print(i)
    except:
        print('error')

# Thêm meg cfig
if __name__ == "__main__":
    main()