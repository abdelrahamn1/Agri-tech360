import os
from flask import request
from dotenv import load_dotenv
import cloudinary
import cloudinary.api
import cloudinary.uploader

load_dotenv()


def upload_file(name, folder):
    """Function to upload file to the server"""
    cloudinary.config(
        cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
        api_key=os.getenv("CLOUDINARY_API_KEY"),
        api_secret=os.getenv("CLOUDINARY_API_SECRET"),
        secure=True,
    )
    try:
        if name not in request.files:
            return None

        file = request.files[name]

        if file.filename == "":
            return None

        if file:
            cloudinary.api.create_folder(folder)
            uploadResponse = cloudinary.uploader.upload(
                file, folder=folder, display_name=file.filename, use_filename=True
            )
            return uploadResponse["secure_url"]

    except Exception:
        return None


def upload_images(path, folder):
    """Function to upload images to the server"""
    cloudinary.config(
        cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
        api_key=os.getenv("CLOUDINARY_API_KEY"),
        api_secret=os.getenv("CLOUDINARY_API_SECRET"),
        secure=True,
    )
    try:
        cloudinary.api.create_folder(folder)
        uploadResponse = cloudinary.uploader.upload(
            path, folder=folder, use_filename=True
        )
        return uploadResponse["secure_url"]

    except Exception:
        return None
