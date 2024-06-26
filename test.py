import requests
from dotenv import load_dotenv
import os
import json

load_dotenv()
api_key = "up:yeah:jsfNBhmyIf8x0f4CbSTDkxAcY49iZ9sD28CwLt4IsAQ8Dn2X41XryW1T5k1zaGjmB9BpiPIOWc2T6JxOJr5sOm4eSDHEJkko3EiIflG7jjntcr6Zp54NgwmOhmE4AyOF"

# Define the URL and headers
url = "https://api.up.com.au/api/v1/transactions"
headers = {
    'Authorization': f'Bearer {api_key}'
}

# Make the GET request
response = requests.get(url, headers=headers)

# Check the response status
print(response.status_code, response.reason)
response_data = response.json()  # Assuming the response is JSON
print(json.dumps(response_data, indent=1))  # Pretty-print the JSON response
