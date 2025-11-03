FROM --platform=linux/amd64 python:3.10.11

WORKDIR /agri-tech360

RUN pip install flask flask_cors flask_swagger_ui python-dotenv google-generativeai numpy pillow PyJWT requests  bcrypt cloudinary tensorflow-cpu

COPY . .

EXPOSE 8000

CMD ["python", "app.py"]