import requests
import os
from dotenv import load_dotenv


load_dotenv()


def is_plant(photo):
    """Function to check if the image is a plant or not"""
    try:
        url = f"https://my-api.plantnet.org/v2/identify/all?images={photo}&include-related-images=false&no-reject=false&lang=en&api-key={os.getenv('PLANT_API_KEY')}"
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            return True
        else:
            return False
    except Exception:
        return False
