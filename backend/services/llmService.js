const { spawn } = require('child_process');

function runLLM(text) {
  return new Promise((resolve, reject) => {
    const process = spawn('python3', ['mlApi/llm/generate.py', text]);

    let result = '';
    process.stdout.on('data', data => result += data.toString());
    process.stderr.on('data', data => console.error(data.toString()));

    process.on('close', () => {
      const output = result.trim();
      console.log("input:", text, "output:", JSON.stringify(output));
      resolve(output);
    });
  });
}

module.exports = { runLLM };
