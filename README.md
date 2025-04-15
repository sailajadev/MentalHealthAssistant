# Mental Health Counselor Assistant

An AI assistant for mental health counselors that uses Machine Learning and GPT-3.5 to provide insights and support based on patient input.


## Tech Stack
- Frontend: React.js
- Backend: Node.js (Express)
- ML: Python (scikit-learn, FastAPI)
- LLM: OpenAI GPT-3.5
- Hosting: Vercel, Render

## Features
- Predicts type of therapeutic response (ML)  
- Generates personalized advice using LLM  
- Clean React UI for quick interaction  
- Modular backend with Python ML microservice

## How It Works

1. Counselor types a patient message
2. Backend:
   - Calls ML model (Python FastAPI) to predict category (e.g. empathetic, advice)
   - Sends message to OpenAI to generate helpful therapist-style response
3. Frontend displays both results

## Run Locally

### 1. ML API (Python)
cd MentalHealthAssistantRoot
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

### 2. Backend (NodeJS)
cd backend
npm install
node server.js

### 3. Frontend (ReactJS)
cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev

## Data URLs
https://www.kaggle.com/datasets/thedevastator/nlp-mental-health-conversations?resource=download



export NVM_DIR="$HOME/.nvm"
    [ -s "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" ] && \. "$HOMEBREW_PREFIX/opt/nvm/nvm.sh" # This loads nvm
    [ -s "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$HOMEBREW_PREFIX/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion

# Docker commands

docker build -t mental-health-assistant .
docker run -p 5000:5000 mental-health-assistant --restart always


docker ps
docker stop d5c99fdc66c5
