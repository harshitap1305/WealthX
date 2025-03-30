# pathway_service/models/schemas.py
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from datetime import datetime

class Transaction(BaseModel):
    id: str
    user_id: str
    amount: float
    category: str
    date: str
    description: Optional[str] = None
    type: str  # 'income' or 'expense'

class Budget(BaseModel):
    id: str
    user_id: str
    start_date: str
    end_date: str
    categories: List[Dict[str, Any]]

class ProcessingRequest(BaseModel):
    user_id: str
    data_type: str
    data: Dict[str, Any]
    options: Optional[Dict[str, Any]] = None