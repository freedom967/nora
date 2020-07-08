from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from . import models
from .database import engine

from .routers import note

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app = FastAPI()
app.mount("/static", StaticFiles(directory="frontend/dist"))

app.include_router(note.router, prefix="/note",tags=['note'])
