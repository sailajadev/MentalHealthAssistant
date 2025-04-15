import { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from '@mui/material';

function App() {
  const [tab, setTab] = useState(0);

  // Tab 0: Predict Category
  const [predictText, setPredictText] = useState('');
  const [prediction, setPrediction] = useState('');

  // Tab 1: Generate Advice
  const [adviceText, setAdviceText] = useState('');
  const [advice, setAdvice] = useState('');

  const handlePredict = async () => {
    const res = await fetch('http://localhost:5000/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: predictText }),
    });
    const data = await res.json();
    setPrediction(data.prediction);
  };

  const handleGenerate = async () => {
    const res = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: adviceText }),
    });
    const data = await res.json();
    setAdvice(data.advice);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Mental Health Assistant
        </Typography>

        <Tabs value={tab} onChange={(e, newTab) => setTab(newTab)} centered>
          <Tab label="Predict Category" />
          <Tab label="Generate Advice" />
        </Tabs>

        <Box mt={4}>
          {tab === 0 && (
            <>
              <TextField
                label="Enter patient description"
                multiline
                rows={5}
                fullWidth
                value={predictText}
                onChange={(e) => setPredictText(e.target.value)}
              />
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button variant="contained" onClick={handlePredict}>
                  Submit
                </Button>
              </Box>
              {prediction && (
                <Box mt={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Prediction:
                  </Typography>
                  <Paper elevation={1} sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="body1" align="justify">{prediction}</Typography>
                  </Paper>
                </Box>
              )}
            </>
          )}

          {tab === 1 && (
            <>
              <TextField
                label="Enter patient description"
                multiline
                rows={5}
                fullWidth
                value={adviceText}
                onChange={(e) => setAdviceText(e.target.value)}
              />
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button variant="contained" onClick={handleGenerate}>
                  Submit
                </Button>
              </Box>
              {advice && (
                <Box mt={4}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Advice:
                  </Typography>
                  <Paper elevation={1} sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                    <Typography variant="body1" align="justify">{advice}</Typography>
                  </Paper>
                </Box>
              )}
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
