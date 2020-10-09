from .. import crud, schemas
from ..database import get_db

from fastapi import APIRouter, Depends

from typing import List

from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/content/{item_id}", response_model=schemas.Item)
def modify_item_content(item_id: int, new_content: str, db: Session = Depends(get_db)):
    users = crud.modify_note_content(db, item_id, new_content)
    return users


@router.get("/title/{item_id}", response_model=schemas.Item)
def modify_item_title(item_id: int, new_title: str, db: Session = Depends(get_db)):
    users = crud.modify_note_title(db, item_id, new_title)
    return users


@router.get("/item/{item_id}", response_model=schemas.Item)
def delect_item(item_id: int, db: Session = Depends(get_db)):
    users = crud.delete_note(db, item_id)
    return users


@router.get("/", response_model=List[schemas.Item])
def read_notes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_notes(db, skip=skip, limit=limit)
    return users


@router.post(
    "/",
    response_model=schemas.Item
)
def create_note(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_note(db, item)
