from server.models import Note
from server.schemas import Item

from sqlalchemy.orm import Session

from . import models,schemas


def get_notes(db:Session,skip: int = 0, limit: int = 100):
    return db.query(models.Note).offset(skip).limit(limit).all()


def create_note(db:Session,item: schemas.ItemCreate):
    db_item = models.Note(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


def modify_note_content(db: Session,item_id: int, new_content: str):
    db_item = db.query(models.Note).filter(models.Note.note_id==item_id).first()
    db_item.content = new_content
    db.commit()
    db.refresh(db_item)
    return db_item

def modify_note_title(db: Session,item_id: int, new_title: str):
    db_item:models.Note = db.query(models.Note).filter(models.Note.note_id==item_id).first()
    db_item.title = new_title
    db.commit()
    db.refresh(db_item)
    return db_item
