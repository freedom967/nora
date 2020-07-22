from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from fastapi.responses import RedirectResponse

from . import models
from .database import engine

from .routers import note

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app = FastAPI()
app.mount("/static", StaticFiles(directory="frontend/dist"))

@app.get("/")
async def main():
    return RedirectResponse("/static/index.html")

app.include_router(note.router, prefix="/note",tags=['note'])
