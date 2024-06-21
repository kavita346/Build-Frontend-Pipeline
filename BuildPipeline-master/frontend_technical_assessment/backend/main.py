from fastapi import FastAPI, Body, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict
import json
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],  # Allow all headers (adjust as needed)
    expose_headers=["*"],
    allow_methods=["*"]
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

# @app.post('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}

# from fastapi import FastAPI, Body, HTTPException

# app = FastAPI()

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: str):

  """
  Parses a pipeline represented as a dictionary containing nodes and edges.

  Raises:
      HTTPException: If there's an error processing the pipeline.
  """
  def is_cyclic_util(v, visited, rec_stack, graph):
    # Mark the current node as visited and add it to the recursion stack
    visited[v] = True
    rec_stack[v] = True

    # Recur for all neighbors
    for neighbor in graph[v]:
        # If the node is not visited, then recur on it
        if not visited[neighbor]:
            if is_cyclic_util(neighbor, visited, rec_stack, graph):
                return True
        # If the node is in the recursion stack, then there is a cycle
        elif rec_stack[neighbor]:
            return True

    # Remove the vertex from recursion stack
    rec_stack[v] = False
    return False

  def is_cyclic(graph):
      visited = {key: False for key in graph}
      rec_stack = {key: False for key in graph}

      for node in graph:
          if not visited[node]:
              if is_cyclic_util(node, visited, rec_stack, graph):
                  return True
      return False

  
  try:
      pipeline_data = json.loads(pipeline)
      nodes = pipeline_data.get("nodes", [])
      edges = pipeline_data.get("edges", [])

      num_nodes = len(nodes)
      num_edges = len(edges)
      adj_list = {}
      for edge in edges:
          source = edge['source']
          target = edge['target']
          
          if source not in adj_list:
              adj_list[source] = []
          adj_list[source].append(target)

      # Ensure all nodes are included
      for edge in edges:
          target = edge['target']
          if target not in adj_list:
              adj_list[target] = []

      # Implement DAG check logic (replace with your preferred algorithm)
      if is_cyclic(adj_list):
       is_dag =True
      else:
          is_dag =False  # Placeholder for DAG check function

  except Exception as e:
      raise HTTPException(status_code=500, detail=f"Error parsing pipeline: {str(e)}")

  # Function to check if the pipeline forms a DAG (replace with your implementation)
  
  return {
      "num_nodes": num_nodes,
      "num_edges": num_edges,
      "is_dag": is_dag,
 }
