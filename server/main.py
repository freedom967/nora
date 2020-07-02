from server.crud import modify_note_content
from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from sqlalchemy.orm import Session
from . import crud, database, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app = FastAPI()
app.mount("/static", StaticFiles(directory="frontend/dist"))


@app.get("/note/content/{item_id}", response_model=schemas.Item)
def modify_item_content(item_id: int, new_content: str, db: Session = Depends(get_db)):
    users = crud.modify_note_content(db, item_id, new_content)
    return users


@app.get("/note/title/{item_id}", response_model=schemas.Item)
def modify_item_title(item_id: int, new_title: str, db: Session = Depends(get_db)):
    users = crud.modify_note_title(db, item_id, new_title)
    return users


@app.post(
    "/note/items",
    response_model=schemas.Item
)
def create_note(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_note(db, item)


@app.get("/note/", response_model=List[schemas.Item])
def read_notes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_notes(db, skip=skip, limit=limit)
    return users
