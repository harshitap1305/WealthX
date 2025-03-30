# pathway_service/api/routes.py
from fastapi import APIRouter, HTTPException
from ..models.schemas import ProcessingRequest
from ..processor.transaction_processor import TransactionProcessor
from ..processor.budget_processor import BudgetProcessor

router = APIRouter()

@router.post("/process")
async def process_data(request: ProcessingRequest):
    try:
        if request.data_type == "transactions":
            processor = TransactionProcessor()
            result = processor.process_transactions(request.data.get("transactions", []), request.options)
            return result
        
        elif request.data_type == "budget":
            processor = BudgetProcessor()
            result = processor.process_budget(
                request.data.get("budget", {}), 
                request.data.get("transactions", [])
            )
            return result
        
        else:
            raise HTTPException(status_code=400, detail=f"Unknown data type: {request.data_type}")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))