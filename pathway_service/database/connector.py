# pathway_service/database/connector.py
import sqlite3
import json
from datetime import datetime

class DatabaseConnector:
    def __init__(self, db_path="pathway_data.db"):
        self.db_path = db_path
        self._initialize_db()
    
    def _initialize_db(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Create tables if they don't exist
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS processed_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            data_type TEXT NOT NULL,
            processed_data TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
        ''')
        
        conn.commit()
        conn.close()
    
    def save_processed_data(self, user_id, data_type, processed_data):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        timestamp = datetime.now().isoformat()
        
        cursor.execute(
            "INSERT INTO processed_data (user_id, data_type, processed_data, created_at) VALUES (?, ?, ?, ?)",
            (user_id, data_type, json.dumps(processed_data), timestamp)
        )
        
        conn.commit()
        conn.close()
        
        return True
    
    def get_processed_data(self, user_id, data_type, start_date=None, end_date=None):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        query = "SELECT processed_data, created_at FROM processed_data WHERE user_id = ? AND data_type = ?"
        params = [user_id, data_type]
        
        if start_date and end_date:
            query += " AND created_at BETWEEN ? AND ?"
            params.extend([start_date, end_date])
        
        query += " ORDER BY created_at DESC LIMIT 1"
        
        cursor.execute(query, params)
        result = cursor.fetchone()
        
        conn.close()
        
        if not result:
            return None
        
        return json.loads(result[0])