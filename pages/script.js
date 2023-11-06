function copyCodeSnippet() {
    const codeElement = document.querySelector('code');
    const copyBtn = document.querySelector('.copy-button');
    const codeSnippet = codeElement.innerText;

    copyBtn.addEventListener('click',()=>{
      copyBtn.style.backgroundColor = 'lightgreen'
    })
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        // alert('Code snippet copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy code snippet:', error);
      });
  }